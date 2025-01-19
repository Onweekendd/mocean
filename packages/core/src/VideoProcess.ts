import MP4Box from "@webav/mp4box.js";
import type {
  MP4ArrayBuffer,
  MP4File,
  MP4Sample,
  TrakBoxParser,
} from "@webav/mp4box.js";

import { EditorState } from "./EditorState.ts";
import { Video } from "./elements/resource/Video.ts";

interface VideoInfo {
  width: number;
  height: number;
  frameRate: number;
  duration: number;
  createTime: Date;
  codec: string;
  description: Uint8Array;
  samples: MP4Sample[];
}

interface DecodedFrame {
  img: ImageBitmap;
  duration: number;
  timestamp: number;
}

class VideoProcess {
  state: EditorState;
  file: MP4File;

  constructor({ state }: { state: EditorState }) {
    this.state = state;
  }

  /**
   * 获取视频封面
   */
  private getVideoCover(videoUrl: string): Promise<string> {
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
   * 解析视频编解码器描述信息
   */
  private parseVideoCodecDesc(track: TrakBoxParser): Uint8Array {
    for (const entry of track.mdia.minf.stbl.stsd.entries) {
      // @ts-expect-error
      const box = entry.avcC ?? entry.hvcC ?? entry.av1C ?? entry.vpcC;
      if (box != null) {
        const stream = new MP4Box.DataStream(
          undefined,
          0,
          MP4Box.DataStream.BIG_ENDIAN,
        );
        box.write(stream);
        return new Uint8Array(stream.buffer.slice(8));
      }
    }
    throw Error("avcC, hvcC, av1C or VPX not found");
  }

  /**
   * 采集视频样本数据
   */
  private async collectVideoSamples(fileUrl: string): Promise<VideoInfo> {
    return new Promise((resolve, reject) => {
      const mp4File = MP4Box.createFile();
      const samples: MP4Sample[] = [];

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
        const totalSeconds = videoTrack.duration / videoTrack.timescale;
        const frameRate = Math.round(videoTrack.nb_samples / totalSeconds);
        const duration = videoTrack.duration / videoTrack.timescale;
        const createTime = new Date(videoTrack.created);
        const codec = videoTrack.codec;
        const description = this.parseVideoCodecDesc(
          mp4File.getTrackById(videoTrack.id),
        );

        mp4File.setExtractionOptions(videoTrack.id, null, {
          nbSamples: videoTrack.nb_samples, // 获取所有样本
        });
        mp4File.start();

        mp4File.onSamples = (id, user, newSamples) => {
          samples.push(...newSamples);
          if (samples.length === videoTrack.nb_samples) {
            mp4File.stop();

            resolve({
              width,
              height,
              frameRate,
              duration,
              createTime,
              codec,
              description,
              samples,
            });
          }
        };
      };

      fetch(fileUrl)
        .then((response) => response.arrayBuffer())
        .then((buffer) => {
          const arrayBuffer = buffer as MP4ArrayBuffer;
          arrayBuffer.fileStart = 0;
          mp4File.appendBuffer(arrayBuffer);
          mp4File.flush();
        })
        .catch(reject);
    });
  }

  /**
   * 解码视频帧
   */
  private async decodeVideoFrames(
    videoInfo: VideoInfo,
  ): Promise<DecodedFrame[]> {
    return new Promise((resolve, reject) => {
      const decodedFrames: DecodedFrame[] = [];
      let isDecoderClosed = false;
      let lastDecodeTime = 0;
      let noNewFrameCount = 0;

      // 检查解码是否完成
      const checkDecodeComplete = () => {
        const currentTime = Date.now();

        if (decodedFrames.length > 0) {
          if (currentTime - lastDecodeTime > 500) {
            // 如果500ms内没有新帧
            noNewFrameCount++;
          } else {
            noNewFrameCount = 0;
          }

          // 连续3次检查都没有新帧，认为解码完成
          if (noNewFrameCount >= 3) {
            if (!isDecoderClosed) {
              isDecoderClosed = true;
              decoder.close();
              // 按时间戳排序确保帧顺序正确
              decodedFrames.sort((a, b) => a.timestamp - b.timestamp);
              resolve(decodedFrames);
            }
            return;
          }
        }

        // 继续检查
        setTimeout(checkDecodeComplete, 200);
      };

      const decoder = new VideoDecoder({
        output: async (frame) => {
          try {
            const bitmap = await createImageBitmap(frame);
            decodedFrames.push({
              img: bitmap,
              duration: frame.duration,
              timestamp: frame.timestamp,
            });

            frame.close();
            lastDecodeTime = Date.now();

            // 打印进度
            if (decodedFrames.length % 10 === 0) {
              console.log(`Decoded frames: ${decodedFrames.length}`);
            }
          } catch (error) {
            console.warn("Failed to create bitmap:", error);
          }
        },
        error: (error) => {
          if (!isDecoderClosed) {
            isDecoderClosed = true;
            decoder.close();
            reject(new Error(error.message));
          }
        },
      });

      // 配置解码器
      decoder.configure({
        codec: videoInfo.codec,
        description: videoInfo.description,
        codedHeight: videoInfo.height,
        codedWidth: videoInfo.width,
      });

      // 批量处理样本
      const BATCH_SIZE = 30;
      let currentBatch = 0;

      const processBatch = () => {
        const start = currentBatch * BATCH_SIZE;
        const end = Math.min(start + BATCH_SIZE, videoInfo.samples.length);

        if (start >= videoInfo.samples.length) {
          return;
        }

        // 处理当前批次的样本
        for (let i = start; i < end; i++) {
          const sample = videoInfo.samples[i];
          try {
            decoder.decode(
              new EncodedVideoChunk({
                type: sample.is_sync ? "key" : "delta",
                timestamp: sample.cts,
                duration: sample.duration,
                data: sample.data,
              }),
            );
          } catch (error) {
            console.warn(`Failed to decode frame ${i}:`, error);
          }
        }

        currentBatch++;

        // 检查解码器状态，如果解码器队列未满，继续处理下一批
        if (decoder.state === "configured" && !isDecoderClosed) {
          setTimeout(processBatch, 0);
        }
      };

      // 开始批量处理和检查
      processBatch();
      checkDecodeComplete();
    });
  }

  /**
   * 获取视频基本信息并解码
   */
  private async getVideoBaseInfo(fileUrl: string): Promise<{
    width: number;
    height: number;
    frameRate: number;
    duration: number;
    createTime: Date;
    codec: string;
    videoFrames: DecodedFrame[];
  }> {
    // 1. 先采集视频样本
    const videoInfo = await this.collectVideoSamples(fileUrl);

    // 2. 解码视频帧
    const videoFrames = await this.decodeVideoFrames(videoInfo);

    return {
      width: videoInfo.width,
      height: videoInfo.height,
      frameRate: videoInfo.frameRate,
      duration: videoInfo.duration,
      createTime: videoInfo.createTime,
      codec: videoInfo.codec,
      videoFrames,
    };
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
      const {
        width,
        height,
        frameRate,
        duration,
        createTime,
        codec,
        videoFrames,
      } = await this.getVideoBaseInfo(newVideo.fileUrl);

      console.log(videoFrames);

      const cover = await this.getVideoCover(newVideo.fileUrl);

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

  public dispose() {
    if (this.file) {
      this.file.flush();
      this.file = null;
    }
  }
}

export { VideoProcess };
