"use client";

import { useEffect, useRef } from "react";
import { Editor as EditorClass } from "@video-editor/core";
import TimeLine from "./TimeLine";
import ElementList from "./ElementList";
import Renderer from "./Renderer";
import PropertyEditor from "./PropertyEditor";

const Editor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const editor = useRef<EditorClass | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      editor.current = new EditorClass(canvasRef.current);
      console.log(editor.current);
    }
  }, []);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-1/2 w-full flex-row">
        <div className="h-full flex-1">
          <ElementList />
        </div>
        <div className="h-full flex-1">
          <Renderer />
        </div>
        <div className="h-full flex-1">
          <PropertyEditor />
        </div>
      </div>

      <div className="h-1/2 flex-1">
        <TimeLine />
      </div>
    </div>
  );
};

export default Editor;
