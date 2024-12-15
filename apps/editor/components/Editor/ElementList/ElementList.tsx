import { useContext } from "react";
import VideoUpload from "./components/VideoUpload";
import { EditorContext } from "../index";
import VideoItem from "./components/VideoItem";

const ElementList = () => {
  const editor = useContext(EditorContext);

  const onUpload = (file: File) => {
    editor?.videoProcess.onVideoUpload({
      file,
    });
  };

  return (
    <div className="h-full w-full">
      <div className="grid h-full w-full grid-cols-5 grid-rows-3 gap-4 p-4">
        {editor?.state
          .getVideos()
          .map((video) => <VideoItem key={video.id} video={video} />)}
        <div className="aspect-square rounded-lg bg-gray-100">
          <VideoUpload onChange={onUpload} />
        </div>
      </div>
    </div>
  );
};

export default ElementList;
