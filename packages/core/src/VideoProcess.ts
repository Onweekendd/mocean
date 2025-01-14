import MP4Box from "@webav/mp4box.js";
import type { MP4ArrayBuffer, MP4File, MP4Sample } from "@webav/mp4box.js";

import { EditorState } from "./EditorState.ts";
import { Video } from "./elements/resource/Video.ts";

class VideoProcess {
  state: EditorState;
  file: MP4File;

  constructor({ state }: { state: EditorState }) {
    this.state = state;
  }

  /**
   * 获取视频封面
   */
  private async getVideoCover(videoUrl: string): Promise<string> {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.src = videoUrl;
      video.currentTime = 0;
      video.addEventListener("loadeddata", () => {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg"));
      });
    });
  }

  /**
   * 获取视频基本信息
   */
  private async getVideoBaseInfo(fileUrl: string): Promise<{
    width: number;
    height: number;
    frameRate: number;
    duration: number;
    createTime: Date;
    codec: string;
    cover: string;
  }> {
    return new Promise((resolve, reject) => {
      const mp4File = MP4Box.createFile();

      mp4File.onError = (error) => {
        reject(new Error(error));
      };

      mp4File.onReady = async (info) => {
        const videoTrack = info.videoTracks[0];
        if (!videoTrack) {
          reject(new Error("No video track found"));
          return;
        }

        const width = videoTrack.track_width;
        const height = videoTrack.track_height;
        // 计算帧率：timescale / duration 得到每秒的帧数
        const frameRate = videoTrack.timescale / videoTrack.duration;
        // 时长需要转换为秒
        const duration = videoTrack.duration / videoTrack.timescale;
        const createTime = new Date(info.created);
        const codec = videoTrack.codec;

        // 获取封面
        const cover = await this.getVideoCover(fileUrl);

        resolve({
          width,
          height,
          frameRate,
          duration,
          createTime,
          codec,
          cover,
        });
      };

      // 开始获取文件
      fetch(fileUrl)
        .then((response) => response.arrayBuffer())
        .then((buffer) => {
          const arrayBuffer = buffer as MP4ArrayBuffer;
          arrayBuffer.fileStart = 0;
          mp4File.appendBuffer(arrayBuffer);
        })
        .catch(reject);
    });
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
      const { width, height, frameRate, duration, createTime, codec, cover } =
        await this.getVideoBaseInfo(newVideo.fileUrl);

      newVideo.width = width;
      newVideo.height = height;
      newVideo.frameRate = frameRate;
      newVideo.duration = Number(duration.toFixed(2));
      newVideo.createTime = createTime;
      newVideo.cover = cover;
      newVideo.codec = codec;
      newVideo.status = "finished";
    } catch (error) {
      console.error("Failed to process video:", error);
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
      const mp4File = MP4Box.createFile();
      const chunks: EncodedVideoChunk[] = [];

      mp4File.onError = (error) => {
        reject(new Error(error));
      };

      mp4File.onReady = (info) => {
        const videoTrack = info.videoTracks[0];
        if (videoTrack) {
          mp4File.setExtractionOptions(videoTrack.id, null, {
            nbSamples: 100,
          });
          mp4File.start();
        }
      };

      mp4File.onSamples = (id, user, samples) => {
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

      fetch(fileUrl)
        .then((response) => response.arrayBuffer())
        .then((buffer) => {
          const arrayBuffer = buffer as MP4ArrayBuffer;
          arrayBuffer.fileStart = 0;
          mp4File.appendBuffer(arrayBuffer);
          resolve(chunks);
        })
        .catch(reject);
    });
  }

  // 在不需要时清理资源
  public dispose() {
    if (this.file) {
      this.file.flush();
      this.file = null;
    }
  }
}

export { VideoProcess };
