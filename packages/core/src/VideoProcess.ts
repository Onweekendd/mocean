import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";

import { EditorState } from "./EditorState.ts";
import { Video } from "./elements/resource/Video.ts";
import { matchVideoBaseInfo } from "./utils/index.ts";

class VideoProcess {
  ffmpeg: FFmpeg;
  state: EditorState;

  constructor({ ffmpeg, state }: { ffmpeg: FFmpeg; state: EditorState }) {
    this.ffmpeg = ffmpeg;
    this.state = state;
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
          this.ffmpeg.off("log", logHandler);
          reject(new Error(message));
        }

        videoInfo += message;
        if (message.includes("Aborted()")) {
          this.ffmpeg.off("log", logHandler);
          resolve(matchVideoBaseInfo(videoInfo));
        }
      };

      this.ffmpeg.on("log", logHandler);
    });
  }

  private async getVideoCover(file: File) {
    const outputFileName = `${file.name}_cover.jpg`;

    await this.ffmpeg.exec([
      "-i",
      file.name,
      "-vf",
      `thumbnail`,
      "-vframes",
      "1",
      outputFileName,
    ]);

    const data = await this.ffmpeg.readFile(outputFileName);
    await this.ffmpeg.deleteFile(outputFileName);

    const blob = new Blob([data], { type: "image/jpeg" });
    return URL.createObjectURL(blob);
  }

  private async getVideoBaseInfo(file: File) {
    const infoLogPromise = this.collectFFmpegLogs();
    await this.ffmpeg.exec(["-i", file.name]);
    const { width, height, frameRate, duration, createTime } =
      await infoLogPromise;

    const cover = await this.getVideoCover(file);

    return { width, height, frameRate, duration, createTime, cover };
  }

  onVideoUpload = async ({ file }: { file: File }) => {
    const newVideo = new Video({
      name: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: URL.createObjectURL(file),
    });

    this.state.setVideos([...this.state.getVideos(), newVideo]);

    try {
      this.ffmpeg.writeFile(file.name, await fetchFile(file));

      const { width, height, frameRate, duration, createTime, cover } =
        await this.getVideoBaseInfo(file);

      newVideo.width = width;
      newVideo.height = height;
      newVideo.frameRate = frameRate;
      newVideo.duration = Number(duration.toFixed(2));
      newVideo.createTime = createTime;
      newVideo.cover = cover;
      newVideo.status = "finished";
    } catch (error) {
      console.error(error);
      newVideo.status = "error";
    }

    this.state.setVideos([
      ...this.state.getVideos().filter((v) => v.id !== newVideo.id),
      newVideo,
    ]);
  };
}

export { VideoProcess };
