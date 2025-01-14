import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";
import MP4Box from "@webav/mp4box.js";
import type { MP4ArrayBuffer, MP4File, MP4Sample } from "@webav/mp4box.js";

import { EditorState } from "./EditorState.ts";
import { Video } from "./elements/resource/Video.ts";
import { matchVideoBaseInfo } from "./utils/index.ts";

class VideoProcess {
  ffmpeg: FFmpeg;
  state: EditorState;
  file: MP4File;

  constructor({ ffmpeg, state }: { ffmpeg: FFmpeg; state: EditorState }) {
    this.ffmpeg = ffmpeg;
    this.state = state;
  }

  private initMP4BoxParser() {
    this.file = MP4Box.createFile();

    this.file.onError = (error) => {
      console.error("MP4Box parsing error:", error);
      // 处理错误...
    };

    this.file.onReady = (info) => {
      try {
        const firstTrack = info.videoTracks[0];
        if (!firstTrack) {
          throw new Error("No video track found");
        }

        this.file.setExtractionOptions(firstTrack.id, null, {
          nbSamples: 1000, // 可以控制每批处理的样本数量
        });
        this.file.start();
      } catch (error) {
        console.error("Failed to start MP4Box processing:", error);
      }
    };

    this.file.onSamples = this.handleVideoSamples.bind(this);
  }

  private handleVideoSamples(id: number, user: any, samples: MP4Sample[]) {
    try {
      const chunks = samples.map(
        (sample) =>
          new EncodedVideoChunk({
            data: sample.data,
            timestamp: sample.cts,
            type: sample.is_sync ? "key" : "delta",
            duration: sample.duration,
          }),
      );

      // 将 chunks 传递给解码器或其他处理逻辑
      this.processVideoChunks(chunks);
    } catch (error) {
      console.error("Failed to process video samples:", error);
    }
  }

  private processVideoChunks(chunks: EncodedVideoChunk[]) {
    // 实现视频块的处理逻辑
  }

  // 在不需要时清理资源
  public dispose() {
    if (this.file) {
      this.file.flush();
      this.file = null;
    }
  }

  private collectFFmpegLogs(): Promise<{
    width: number;
    height: number;
    frameRate: number;
    duration: number;
    createTime: Date;
    codec: string;
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
    const { width, height, frameRate, duration, createTime, codec } =
      await infoLogPromise;

    const cover = await this.getVideoCover(file);

    return { width, height, frameRate, duration, createTime, cover, codec };
  }

  // 添加编码格式映射函数
  private mapFFmpegCodecToWebCodec(ffmpegCodec: string): string {
    const codecMap: Record<string, string> = {
      h264: "avc1.42E01E",
      hevc: "hevc",
      vp8: "vp8",
      vp9: "vp9",
      av1: "av01",
    };

    return codecMap[ffmpegCodec.toLowerCase()] || "avc1.42E01E";
  }

  onVideoUpload = async ({ file }: { file: File }) => {
    const newVideo = new Video({
      name: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: URL.createObjectURL(file),
    });

    const chunks = await this.quickParseMP4(newVideo.fileUrl);
    console.log(chunks);

    this.state.setVideos([...this.state.getVideos(), newVideo]);

    try {
      const buffer = await fetchFile(file);

      this.ffmpeg.writeFile(file.name, buffer);

      const { width, height, frameRate, duration, createTime, cover, codec } =
        await this.getVideoBaseInfo(file);

      newVideo.width = width;
      newVideo.height = height;
      newVideo.frameRate = frameRate;
      newVideo.duration = Number(duration.toFixed(2));
      newVideo.createTime = createTime;
      newVideo.cover = cover;
      newVideo.codec = this.mapFFmpegCodecToWebCodec(codec);
      newVideo.status = "finished";
    } catch (error) {
      newVideo.status = "error";
    }

    this.state.setVideos([
      ...this.state.getVideos().filter((v) => v.id !== newVideo.id),
      newVideo,
    ]);
  };

  /**
   * 快速解析 MP4 文件，避免一次性加载过大数据
   */
  async quickParseMP4(fileUrl: string): Promise<EncodedVideoChunk[]> {
    return new Promise((resolve, reject) => {
      const mp4File = MP4Box.createFile(false);
      const chunks: EncodedVideoChunk[] = [];

      mp4File.onMoovStart = () => {
        console.log(mp4File.moov);
      };

      mp4File.onError = (error) => {
        console.log("onError", error);
      };

      mp4File.onReady = (info) => {
        console.log("onReady", info);
        const videoTrack = info.videoTracks[0];
        if (videoTrack) {
          mp4File.setExtractionOptions(videoTrack.id, "video", {
            nbSamples: 100,
          });
        }

        mp4File.start();
      };

      mp4File.onSamples = (id, type, samples) => {
        const newChunks = samples.map(
          (sample) =>
            new EncodedVideoChunk({
              type: sample.is_sync ? "key" : "delta",
              timestamp: sample.cts,
              duration: sample.duration,
              data: sample.data,
            }),
        );
        chunks.push(...newChunks);
      };

      fetch(fileUrl).then((res) => {
        const reader = res.body!.getReader();
        this.parseStream(reader, mp4File).then(() => {
          resolve(chunks);
        });
      });
    });
  }

  /**
   * 流式解析 MP4 数据
   */
  private async parseStream(
    reader: ReadableStreamDefaultReader<Uint8Array>,
    mp4File: MP4File,
  ): Promise<void> {
    let cursor = 0;

    while (true) {
      try {
        const { value, done } = await reader.read();
        if (done || !value) break;

        const buffer = value.buffer as MP4ArrayBuffer;
        buffer.fileStart = cursor;

        const nextPos = mp4File.appendBuffer(buffer);
        if (nextPos == null) break;

        cursor = nextPos;
      } catch (error) {
        console.error("Error reading stream:", error);
        break;
      }
    }

    mp4File.stop();
  }
}

export { VideoProcess };
