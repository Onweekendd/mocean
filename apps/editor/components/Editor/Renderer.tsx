import { useContext, useEffect, useReducer, useRef } from "react";

import type { Image } from "konva/lib/shapes/Image";
import { Image as KonvaImage, Layer, Stage } from "react-konva";

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

  const [, forceUpdate] = useReducer((x: number) => x + 1, 0);

  useEffect(() => {
    editor?.initRenderer({
      width: canvasContainerRef.current?.clientWidth ?? 0,
      height: canvasContainerRef.current?.clientHeight ?? 0,
    });
  }, [editor]);

  useEffect(() => {
    renderingVideos?.forEach((video, index) => {
      const videoElement = videoRef.current[index];
      const videoNode = renderingVideoNodesRef.current[index];

      console.log(video, videoElement, videoNode);

      if (video && videoElement) {
        videoElement.src = video.fileUrl;

        videoElement.addEventListener("loadeddata", () => {
          videoElement.play();
          animate(videoElement, videoNode);
        });
      }
    });

    forceUpdate();
  }, [
    renderingVideos?.length,
    videoRef.current?.length,
    renderingVideoNodesRef.current.length,
  ]);

  return (
    <div ref={canvasContainerRef} className="h-full w-full">
      <Stage
        width={canvasContainerRef.current?.clientWidth}
        height={canvasContainerRef.current?.clientHeight}
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
        />
      ))}
    </div>
  );
};

export default Renderer;
