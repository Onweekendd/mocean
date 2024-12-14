"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import { Editor as EditorSDK } from "@video-editor/core";
import { StateManager } from "@video-editor/core/StateManager";
import TimeLine from "./TimeLine";
import ElementList from "./ElementList/ElementList";
import Renderer from "./Renderer";
import PropertyEditor from "./PropertyEditor";
import { EditorContext, ReducerEditorState, ReducerEditorStateReducer } from "../context/EditorContext";

const Editor = () => {

  const [editor, setEditor] = useState<EditorSDK | null>(null);
  const [stateManager, setStateManager] = useState<StateManager | null>(null);
  const [state, dispatch] = useReducer(ReducerEditorStateReducer,{value:""})
  const storeRef = useRef( new ReducerEditorState(state, dispatch))

  useEffect(() => {
    EditorSDK.build(storeRef.current).then((editor) => {
      setEditor(editor);
      setStateManager(new StateManager(editor));
    });
  }, []);

  useEffect(() => {
    storeRef.current.syncState(state)
  }, [state]);

  // TODO: 添加加载进度条
  if (!editor) return <div>Loading...</div>;

  return (
    <EditorContext.Provider value={editor}>
      <button onClick={() => {
        dispatch({ type: "setState", payload: {value:"123"} });
        // 获得内部数据
        setTimeout(()=>{
          const value = editor.getValues()
          console.log(value)
        },1000)
      }}>修改state</button>

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
