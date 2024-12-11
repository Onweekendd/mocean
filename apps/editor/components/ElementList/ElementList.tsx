import { useContext } from "react";
import VideoUpload from "./components/VideoUpload";
import { EditorContext } from "../../context/EditorContext";

const ElementList = () => {
  const editor = useContext(EditorContext);

  const elementList = editor?.resourceManager.videos;

  return (
    <div className="h-full w-full">
      <div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-4 p-4">
        {elementList?.map((video) => (
          <div
            key={video.name + Math.random()}
            className="aspect-square rounded-lg bg-gray-100"
          >
            {video.name}
          </div>
        ))}
        <div className="aspect-square rounded-lg bg-gray-100">
          <VideoUpload
            onChange={(file) => {
              editor?.resourceManager.addVideo(file);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ElementList;
