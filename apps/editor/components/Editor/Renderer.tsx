import {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import type { Image } from "konva/lib/shapes/Image";
import { Image as KonvaImage, Layer, Stage } from "react-konva";

import { Video } from "@video-editor/core";

import { EditorContext } from ".";
import PlayControl from "./components/PlayControl";

const Renderer = () => {
  const editor = useContext(EditorContext);

  const renderingVideos = editor?.state
    .getRenderingList()
    .map((id) => editor?.state.getVideos().find((video) => video.id === id));

  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const videoToElement = useRef<
    Map<string, { canvas?: Image; element?: HTMLVideoElement }>
  >(new Map());

  const onVideoPlay = useCallback((video: Video) => {
    const elements = videoToElement.current.get(video.id);

    if (!elements) return;
    const { element, canvas } = elements;

    if (element?.paused || element?.ended || !canvas) {
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

  useEffect(() => {
    const newMap = new Map<
      string,
      { canvas?: Image; element?: HTMLVideoElement }
    >();

    (renderingVideos ?? []).forEach((video) => {
      if (!video) return;
      if (!videoToElement.current.has(video.id)) {
        newMap.set(video.id, { canvas: undefined, element: undefined });
      } else {
        newMap.set(video.id, videoToElement.current.get(video.id)!);
      }
    });

    videoToElement.current = newMap;
  }, [renderingVideos?.length]);

  const [isPlaying, setIsPlaying] = useState(false);
  const onPlayPause = useCallback(() => {
    if (isPlaying) {
      for (const { element } of videoToElement.current.values()) {
        element?.pause();
      }
      editor?.renderer?.onPause();
      setIsPlaying(false);
    } else {
      for (const { element } of videoToElement.current.values()) {
        element?.play();
      }
      editor?.renderer?.onPlay();
      setIsPlaying(true);
    }
  }, [isPlaying, editor?.renderer]);

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
                        videoToElement.current.set(video.id, {
                          ...videoToElement.current.get(video.id),
                          canvas: node,
                        });
                      }
                    }}
                    image={videoToElement.current.get(video.id)?.element}
                  />
                ),
            )}
          </Layer>
        </Stage>
      </div>

      <PlayControl isPlaying={isPlaying} onPlayPause={onPlayPause} />

      {renderingVideos?.map(
        (video) =>
          video && (
            <video
              key={video.id}
              ref={(node) => {
                if (node) {
                  videoToElement.current.set(video.id, {
                    ...videoToElement.current.get(video.id),
                    element: node,
                  });
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
