import { useCallback, useContext, useEffect, useRef, useState } from "react";

import type { Image } from "konva/lib/shapes/Image";
import { Image as KonvaImage, Layer, Stage } from "react-konva";

import { Video } from "@video-editor/core";

import { EditorContext } from ".";
import PlayControl from "./components/PlayControl";

const Renderer = () => {
  const editor = useContext(EditorContext)!;
  const videos = editor.state.getVideos();

  const tracks = editor.state.getTracks();

  const currentTime = editor.state.getCurrentTime();

  const renderElements = tracks
    .map((track) => track.getRenderElementsAtTime(currentTime))
    .flat();

  const renderVideoElements = renderElements.map((element) => {
    const video = videos.find((video) => video.id === element.resourceId);
    return { ...element, video };
  });

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
    editor.initRenderer({
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

    (renderVideoElements ?? []).forEach((renderVideo) => {
      if (!renderVideo.video) return;
      if (!videoToElement.current.has(renderVideo.video.id)) {
        newMap.set(renderVideo.video.id, {
          canvas: undefined,
          element: undefined,
        });
      } else {
        newMap.set(
          renderVideo.video.id,
          videoToElement.current.get(renderVideo.video.id)!,
        );
      }
    });

    videoToElement.current = newMap;
  }, [renderVideoElements?.length]);

  const [isPlaying, setIsPlaying] = useState(false);
  const onPlayPause = useCallback(() => {
    if (isPlaying) {
      for (const { element } of videoToElement.current.values()) {
        element?.pause();
      }
      editor.renderer?.onPause();
      setIsPlaying(false);
    } else {
      for (const { element } of videoToElement.current.values()) {
        element?.play();
      }
      editor.renderer?.onPlay();
      setIsPlaying(true);
    }
  }, [isPlaying, editor.renderer]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-full flex-1" ref={canvasContainerRef}>
        <Stage
          width={canvasContainerRef.current?.clientWidth ?? 0}
          height={canvasContainerRef.current?.clientHeight ?? 0}
        >
          <Layer>
            {renderVideoElements?.map(
              (renderVideo) =>
                renderVideo.video && (
                  <KonvaImage
                    key={renderVideo.video.id}
                    x={0}
                    y={0}
                    width={renderVideo.video.width}
                    height={renderVideo.video.height}
                    ref={(node) => {
                      if (node && renderVideo.video) {
                        videoToElement.current.set(renderVideo.video.id, {
                          ...videoToElement.current.get(renderVideo.video.id),
                          canvas: node,
                        });
                      }
                    }}
                    image={
                      videoToElement.current.get(renderVideo.video.id)?.element
                    }
                  />
                ),
            )}
          </Layer>
        </Stage>
      </div>

      <PlayControl isPlaying={isPlaying} onPlayPause={onPlayPause} />

      {renderVideoElements?.map(
        (renderVideo) =>
          renderVideo.video && (
            <video
              key={renderVideo.video.id}
              ref={(node) => {
                if (node && renderVideo.video) {
                  videoToElement.current.set(renderVideo.video.id, {
                    ...videoToElement.current.get(renderVideo.video.id),
                    element: node,
                  });
                }
              }}
              src={renderVideo.video?.fileUrl}
              hidden
              onEnded={() => setIsPlaying(false)}
            />
          ),
      )}
    </div>
  );
};

export default Renderer;
