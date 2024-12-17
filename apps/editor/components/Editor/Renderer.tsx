import { useContext, useEffect, useRef, useState } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import type { Image } from "konva/lib/shapes/Image";
import { EditorContext } from ".";

const Renderer = () => {
  const editor = useContext(EditorContext);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoNode, setVideoNode] = useState<Image | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const activeVideo = editor?.state.getActiveVideo();
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  // 计算视频尺寸以适应容器
  const calculateDimensions = () => {
    const video = videoRef.current;
    const container = canvasContainerRef.current;
    if (!video || !container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const videoRatio = video.videoWidth / video.videoHeight;

    let width = containerWidth;
    let height = containerWidth / videoRatio;

    // 如果计算出的高度超过容器高度，则以高度为基准重新计算
    if (height > containerHeight) {
      height = containerHeight;
      width = containerHeight * videoRatio;
    }

    setDimensions({ width, height });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.src = activeVideo?.fileUrl ?? "";

      const animate = () => {
        if (video.paused || video.ended) {
          return;
        }

        videoNode?.getLayer()?.batchDraw();
        requestAnimationFrame(animate);
      };

      video.addEventListener("loadeddata", () => {
        calculateDimensions();
        video.play();
        animate();
      });
    }
  }, [activeVideo?.fileUrl, videoNode]);

  return (
    <div ref={canvasContainerRef} className="h-full w-full">
      <Stage
        width={canvasContainerRef.current?.clientWidth}
        height={canvasContainerRef.current?.clientHeight}
      >
        <Layer>
          <KonvaImage
            x={0}
            y={0}
            width={dimensions.width}
            height={dimensions.height}
            ref={(node) => {
              setVideoNode(node);
            }}
            image={videoRef.current!}
          />
        </Layer>
      </Stage>
      <video ref={videoRef} src={activeVideo?.fileUrl} hidden />
    </div>
  );
};

export default Renderer;
