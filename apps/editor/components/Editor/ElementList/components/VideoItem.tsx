import type { Video } from "@video-editor/core";
import Image from "next/image";
import { EditorContext } from "../..";
import { useContext } from "react";
import clsx from "clsx";
interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const editor = useContext(EditorContext);

  const onFinishedVideoClick = () => {
    editor?.state.setActiveVideoId(video.id);
  };

  return (
    <div className="aspect-square rounded-lg bg-gray-100 text-xs">
      {video.status === "processing" && (
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-2">
          <div className="absolute left-2 top-2 text-xs text-gray-500">
            {video.name}
          </div>
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-sky-500" />
        </div>
      )}
      {video.status === "finished" && (
        <Image
          onClick={onFinishedVideoClick}
          className={clsx(
            "!relative h-full w-full cursor-pointer rounded-md border-2 border-transparent object-cover",
            editor?.state.getActiveVideoId() === video.id && "!border-sky-500",
          )}
          src={video.cover}
          alt={video.name}
          fill
        />
      )}
      {video.status === "error" && (
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-sky-500" />
        </div>
      )}
    </div>
  );
};

export default VideoItem;
