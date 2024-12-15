import { fetchFile } from "@ffmpeg/util";
import { EditorState } from "@/EditorState.ts";
import { Video } from "@/elements/Video.ts";
import { matchVideoBaseInfo } from "@/utils/index.ts";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { ResourceManager } from "@/ResourceManager.ts";

class VideoProcess {
  ffmpeg: FFmpeg;
  state: EditorState;

  constructor({
    ffmpeg,
    state,
    resourceManager,
  }: {
    ffmpeg: FFmpeg;
    state: EditorState;
    resourceManager: ResourceManager;
  }) {
    this.ffmpeg = ffmpeg;
    this.state = state;
    resourceManager.on("onVideoUpload", this.onVideoUpload);
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

  onVideoUpload = async ({
    file,
    placeholderId,
  }: {
    file: File;
    placeholderId?: string;
  }) => {
    this.ffmpeg.writeFile(file.name, await fetchFile(file));

    const video = new Video({
      fileSize: file.size,
      fileType: file.type,
      name: file.name,
      ...(await this.getVideoBaseInfo(file)),
    });

    this.ffmpeg.deleteFile(file.name);

    this.state.setVideos([...this.state.getVideos(), video]);
  };
}

export { VideoProcess };
