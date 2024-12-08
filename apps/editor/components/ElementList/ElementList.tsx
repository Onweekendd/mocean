import { useContext, useState } from "react";
import VideoUpload from "./components/VideoUpload";
import { EditorContext } from "../Editor";

const ElementList = () => {
  const editor = useContext(EditorContext);
  return (
    <div className="h-full w-full">
      <VideoUpload
        onChange={(file) => {
          editor?.resourceManager.addVideo(file);
        }}
      />
    </div>
  );
};

export default ElementList;
