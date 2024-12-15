import { useContext, useEffect, useState } from "react";
import VideoUpload from "./components/VideoUpload";
import { EditorContext } from "../index";
import { Video } from "@video-editor/core";
import Image from "next/image";

const ElementList = () => {
  const editor = useContext(EditorContext);
  const [elementList, setElementList] = useState<Video[]>(
    editor?.state.getVideos() || [],
  );

  // useEffect(() => {
  //   editor?.videoProcess.on("onVideoProcessFinish", ({ video }) => {
  //     setElementList((prev) => {
  //       // 找到并替换占位元素
  //       const index = prev.findIndex((v) => v.id.includes("placeholder"));
  //       if (index !== -1) {
  //         const newList = [...prev];
  //         newList[index] = video;
  //         return newList;
  //       }
  //       return [...prev, video];
  //     });
  //   });
  // }, [editor]);

  const onVideoUpload = (file: File) => {
    const placeholder = new Video({
      name: file.name,
      fileSize: file.size,
      fileType: file.type,
      width: 0,
      height: 0,
      frameRate: 0,
      createTime: new Date(),
      duration: 0,
      cover: "",
    });

    placeholder.id += "placeholder";
    setElementList((prev) => [...prev, placeholder]);

    editor?.resourceManager.addVideo({
      video: file,
      placeholderId: placeholder.id,
    });
  };

  return (
    <div className="h-full w-full">
      <div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-4 p-4">
        {elementList?.map((video) => (
          <div
            key={video.name + Math.random()}
            className="aspect-square rounded-lg bg-gray-100 text-xs"
          >
            {video.id.includes("placeholder") ? (
              <div className="flex h-full w-full items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-sky-500" />
              </div>
            ) : (
              <Image
                className="!relative h-full w-full rounded-md border-2 border-transparent object-cover hover:border-sky-500"
                src={video.cover}
                alt={video.name}
                fill
              />
            )}
          </div>
        ))}
        <div className="aspect-square rounded-lg bg-gray-100">
          <VideoUpload onChange={onVideoUpload} />
        </div>
      </div>
    </div>
  );
};

export default ElementList;
