"use client";

import { useEffect, useState } from "react";
import { Editor as EditorSDK } from "@video-editor/core";
import TimeLine from "./TimeLine";
import ElementList from "./ElementList/ElementList";
import Renderer from "./Renderer";
import PropertyEditor from "./PropertyEditor";
import { EditorContext } from "../context/EditorContext";

const Editor = () => {
  const [editor, setEditor] = useState<EditorSDK | null>(null);

  useEffect(() => {
    EditorSDK.build().then((editor) => {
      setEditor(editor);
    });
  }, []);

  // TODO: 添加加载进度条
  if (!editor) return <div>Loading...</div>;

  return (
    <EditorContext.Provider value={editor}>
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

        <div className="flex-1">
          <TimeLine />
        </div>
      </div>
    </EditorContext.Provider>
  );
};

export default Editor;
