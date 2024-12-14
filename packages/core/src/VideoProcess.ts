import { fetchFile } from "@ffmpeg/util";
import { Editor } from "./editor.js";
import { Video } from "./elements/Video.js";
import { EventEmitter } from "./interfaces/EventEmitter.js";
import { matchVideoBaseInfo } from "./utils/index.js";

type VideoProcessEvents = {
  onVideoProcessFinish: (payload: {
    video: Video;
    placeholderId?: string;
  }) => void;
};

class VideoProcess extends EventEmitter<VideoProcessEvents> {
  editor: Editor;
  videos: Video[] = [];

  constructor(editor: Editor) {
    super();

    this.editor = editor;
    this.editor.resourceManager.on("onVideoUpload", this.onVideoUpload);
  }

  private collectFFmpegLogs(): Promise<{
    width: number;
    height: number;
    frameRate: number;
    duration: number;
    createTime: Date;
  }> {
    return new Promise((resolve, reject) => {
      let videoInfo = "";

      const logHandler = ({ message }: { message: string }) => {
        if (message.includes("error")) {
          this.editor.ffmpeg.off("log", logHandler);
          reject(new Error(message));
        }

        videoInfo += message;
        if (message.includes("Aborted()")) {
          this.editor.ffmpeg.off("log", logHandler);
          resolve(matchVideoBaseInfo(videoInfo));
        }
      };

      this.editor.ffmpeg.on("log", logHandler);
    });
  }

  private async getVideoCover(file: File) {
    const outputFileName = `${file.name}_cover.jpg`;

    await this.editor.ffmpeg.exec([
      "-i",
      file.name,
      "-vf",
      `thumbnail`,
      "-vframes",
      "1",
      outputFileName,
    ]);

    const data = await this.editor.ffmpeg.readFile(outputFileName);
    await this.editor.ffmpeg.deleteFile(outputFileName);

    const blob = new Blob([data], { type: "image/jpeg" });
    return URL.createObjectURL(blob);
  }

  private async getVideoBaseInfo(file: File) {
    const infoLogPromise = this.collectFFmpegLogs();
    await this.editor.ffmpeg.exec(["-i", file.name]);
    const { width, height, frameRate, duration, createTime } =
      await infoLogPromise;

    const cover = await this.getVideoCover(file);

    return { width, height, frameRate, duration, createTime, cover };
  }

  onVideoUpload = async ({
    file,
    placeholderId,
  }: {
    file: File;
    placeholderId?: string;
  }) => {
    this.editor.ffmpeg.writeFile(file.name, await fetchFile(file));

    const video = new Video({
      fileSize: file.size,
      fileType: file.type,
      name: file.name,
      ...(await this.getVideoBaseInfo(file)),
    });

    this.editor.ffmpeg.deleteFile(file.name);

    console.log(video);
    this.videos.push(video);

    this.emit("onVideoProcessFinish", { video, placeholderId });
  };
}

export { VideoProcess };
