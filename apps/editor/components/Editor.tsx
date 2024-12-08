"use client";

import { createContext, useEffect, useState } from "react";
import { Editor as EditorClass } from "@video-editor/core";
import TimeLine from "./TimeLine";
import ElementList from "./ElementList/ElementList";
import Renderer from "./Renderer";
import PropertyEditor from "./PropertyEditor";

export const EditorContext = createContext<EditorClass | null>(null);

const Editor = () => {
  const [editor, setEditor] = useState<EditorClass | null>(null);

  useEffect(() => {
    const editor = new EditorClass();
    setEditor(editor);
    console.log(editor);
  }, []);

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
