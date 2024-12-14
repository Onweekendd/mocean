import { fetchFile } from "@ffmpeg/util";
import { Editor } from "./Editor.js";
import { Video } from "./elements/Video.js";
import { EventEmitter } from "./interfaces/EventEmitter.js";

function matchVideoBaseInfo(videoInfo: string): {
  width: number;
  height: number;
  frameRate: number;
  duration: number;
} {
  const videoInfoMatch = videoInfo.match(
    /Stream.*Video:.*?,.*?(\d+)x(\d+).*?(\d+(?:\.\d+)?)\s+fps/
  );
  const width = videoInfoMatch ? parseInt(videoInfoMatch[1] ?? "0") : 0;
  const height = videoInfoMatch ? parseInt(videoInfoMatch[2] ?? "0") : 0;
  const frameRate = videoInfoMatch ? parseFloat(videoInfoMatch[3] ?? "0") : 0;

  const videoDurationMatch = videoInfo.match(
    /Duration: (\d{2}):(\d{2}):(\d{2}.\d{2})/
  );
  const duration = videoDurationMatch
    ? parseInt(videoDurationMatch[1] ?? "0") * 3600 +
      parseInt(videoDurationMatch[2] ?? "0") * 60 +
      parseFloat(videoDurationMatch[3] ?? "0")
    : 0;

  return { width, height, frameRate, duration };
}

type VideoProcessEvents = {
  onVideoProcessFinish: (payload: { video: Video }) => void;
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
  }> {
    return new Promise((resolve) => {
      let videoInfo = "";

      const shouldListenerStop = (message: string) => {
        return message.includes("Aborted()") || message.includes("error");
      };

      const logHandler = ({ message }: { message: string }) => {
        videoInfo += message;

        if (shouldListenerStop(message)) {
          resolve(matchVideoBaseInfo(videoInfo));
          this.editor.ffmpeg.off("log", logHandler);
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
    const { width, height, frameRate, duration } = await infoLogPromise;

    const cover = await this.getVideoCover(file);

    return { width, height, frameRate, duration, cover };
  }

  onVideoUpload = async ({ file }: { file: File }) => {
    this.editor.ffmpeg.writeFile(file.name, await fetchFile(file));

    const { width, height, frameRate, duration, cover } =
      await this.getVideoBaseInfo(file);

    this.editor.ffmpeg.deleteFile(file.name);

    const video = new Video({
      file,
      width,
      height,
      frameRate,
      createTime: new Date(),
      duration,
      cover,
    });

    console.log(video);
    this.videos.push(video);

    this.emit("onVideoProcessFinish", { video });
  };
}

export { VideoProcess };
