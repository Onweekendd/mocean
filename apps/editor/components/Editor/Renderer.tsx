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

const Renderer = () => {
  const editor = useContext(EditorContext);

  const renderingVideos = editor?.state
    .getRenderingList()
    .map((id) => editor?.state.getVideos().find((video) => video.id === id));

  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const videoNodesMap = useRef(new Map<string, Image>());
  const videoElementsMap = useRef(new Map<string, HTMLVideoElement>());
  const videoToElement = useRef<
    { video: Video; canvas: Image; element: HTMLVideoElement }[]
  >([]);

  const onVideoPlay = useCallback((video: Video) => {
    const videoElement = videoToElement.current.find(
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
    videoToElement.current = (renderingVideos ?? [])
      .map((video) => {
        if (!video) return null;
        const canvas = videoNodesMap.current.get(video.id);
        const element = videoElementsMap.current.get(video.id);

        if (!canvas || !element) return null;
        return { video, canvas, element };
      })
      .filter((item) => item !== null);
    forceUpdate();
  }, [
    renderingVideos?.length,
    videoNodesMap.current.size,
    videoElementsMap.current.size,
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  const onPlayPause = useCallback(() => {
    if (isPlaying) {
      videoToElement.current.forEach(({ element }) => {
        element.pause();
      });
      editor?.renderer?.onPause();
      setIsPlaying(false);
    } else {
      videoToElement.current.forEach(({ element }) => {
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
              (video) =>
                video && (
                  <KonvaImage
                    key={video.id}
                    x={video.x}
                    y={video.y}
                    width={video.renderWidth}
                    height={video.renderHeight}
                    ref={(node) => {
                      if (node) {
                        videoNodesMap.current.set(video.id, node);
                      }
                    }}
                    image={videoElementsMap.current.get(video.id)}
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

      {renderingVideos?.map(
        (video) =>
          video && (
            <video
              key={video.id}
              ref={(node) => {
                if (node) {
                  videoElementsMap.current.set(video.id, node);
                }
              }}
              src={video?.fileUrl}
              hidden
              onEnded={() => setIsPlaying(false)}
            />
          ),
      )}
    </div>
  );
};

export default Renderer;
