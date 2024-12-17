import { useRef } from "react";
import { Stage, Layer, Rect } from "react-konva";

const Renderer = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="h-full w-full" ref={canvasContainerRef}>
      {canvasContainerRef.current && (
        <Stage
          width={canvasContainerRef.current?.clientWidth}
          height={canvasContainerRef.current?.clientHeight}
        >
          <Layer>
            <Rect x={0} y={0} width={100} height={100} fill="red" />
          </Layer>
        </Stage>
      )}
    </div>
  );
};

export default Renderer;
