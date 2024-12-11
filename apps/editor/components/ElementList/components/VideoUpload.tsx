import { FC } from "react";

interface VideoUploadProps {
  onChange: (file: File) => void;
}

const VideoUpload: FC<VideoUploadProps> = ({ onChange }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4">
      <input
        type="file"
        accept="video/*"
        className="hidden"
        id="video-upload"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            // 处理视频文件
            onChange(file);
          }
        }}
      />
      <label
        htmlFor="video-upload"
        className="flex cursor-pointer flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-2 h-8 w-8 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-xs text-gray-500">
            <span className="font-semibold">点击上传</span>
          </p>
        </div>
      </label>
    </div>
  );
};

export default VideoUpload;
