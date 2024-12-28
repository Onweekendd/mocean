import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

import type { Image } from "konva/lib/shapes/Image";
import { HiOutlinePause, HiOutlinePlay } from "react-icons/hi";
import { Image as KonvaImage, Layer, Stage } from "react-konva";

import { Video } from "@video-editor/core";

import { EditorContext } from ".";

const animate = (
  videoElement: HTMLVideoElement,
  videoNode: Image | undefined,
) => {
  if (videoElement.paused || videoElement.ended || !videoNode) {
    return;
  }

  videoNode?.getLayer()?.batchDraw();
  requestAnimationFrame(() => animate(videoElement, videoNode));
};

const Renderer = () => {
  const editor = useContext(EditorContext);

  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const renderingVideos = editor?.state
    .getRenderingList()
    .map((id) => editor?.state.getVideos().find((video) => video.id === id));

  const videoRef = useRef<HTMLVideoElement[]>([]);
  const renderingVideoNodesRef = useRef<Image[]>([]);

  const videoToElementRef = useRef<
    Array<{
      video: Video;
      canvas: Image;
      element: HTMLVideoElement;
    }>
  >([]);

  const videoToElement = useMemo(() => {
    const elements = (renderingVideos ?? [])
      .map((video, index) => {
        if (!video) return null;
        const canvas = renderingVideoNodesRef.current[index];
        const element = videoRef.current[index];

        if (!canvas || !element) return null;

        return {
          video,
          canvas,
          element,
        };
      })
      .filter((item) => item !== null);

    videoToElementRef.current = elements;
    return elements;
  }, [renderingVideos]);

  const onVideoPlay = useCallback((video: Video) => {
    const videoElement = videoToElementRef.current.find(
      (item) => item.video.id === video.id,
    );

    if (!videoElement) return;
    const { element, canvas } = videoElement;

    if (element.paused || element.ended || !canvas) {
      return;
    }

    canvas.getLayer()?.batchDraw();
  }, []);

  useEffect(() => {
    editor?.initRenderer({
      width: canvasContainerRef.current?.clientWidth ?? 0,
      height: canvasContainerRef.current?.clientHeight ?? 0,
      onVideoPlay,
    });
  }, [editor]);

  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);
  useEffect(() => {
    forceUpdate();
  }, [
    renderingVideos?.length,
    videoRef.current.length,
    renderingVideoNodesRef.current.length,
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  const onPlayPause = useCallback(() => {
    if (isPlaying) {
      videoToElement.forEach(({ element }) => {
        element.pause();
      });
      editor?.renderer?.onPause();
      setIsPlaying(false);
    } else {
      videoToElement.forEach(({ element }) => {
        element.play();
      });
      editor?.renderer?.onPlay();
      setIsPlaying(true);
    }
  }, [isPlaying, editor?.renderer, videoToElement]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-full flex-1" ref={canvasContainerRef}>
        <Stage
          width={canvasContainerRef.current?.clientWidth ?? 0}
          height={canvasContainerRef.current?.clientHeight ?? 0}
        >
          <Layer>
            {renderingVideos?.map(
              (video, index) =>
                video && (
                  <KonvaImage
                    key={video.id}
                    x={video.x}
                    y={video.y}
                    width={video.renderWidth}
                    height={video.renderHeight}
                    ref={(node) => {
                      if (node) {
                        renderingVideoNodesRef.current[index] = node;
                      }
                    }}
                    image={videoRef.current[index]!}
                  />
                ),
            )}
          </Layer>
        </Stage>
      </div>

      <div className="flex h-12 items-center justify-center border-t border-gray-200 bg-white">
        <button
          onClick={onPlayPause}
          className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
        >
          {isPlaying ? (
            <HiOutlinePause className="h-6 w-6 text-sky-500" />
          ) : (
            <HiOutlinePlay className="h-6 w-6 text-sky-500" />
          )}
        </button>
      </div>

      {renderingVideos?.map((video, index) => (
        <video
          key={video?.id}
          ref={(node) => {
            if (node) {
              videoRef.current[index] = node;
            }
          }}
          src={video?.fileUrl}
          hidden
          onEnded={() => setIsPlaying(false)}
        />
      ))}
    </div>
  );
};

export default Renderer;
