import { BaseElement } from "./elements/BaseElement.ts";
import { Track } from "./elements/Track.ts";
import { Video } from "./elements/resource/Video.ts";
import { TimelineProcess } from "./interfaces/TimelineProcess.ts";

export interface State {
  /**@description 当前激活的视频Id */
  activeVideoId: string;

  /**@description 视频列表 */
  videos: Video[];

  /**@description 文件名列表 */
  filesName: string[];

  /**@description 单位时间(毫秒) */
  unitTime: number;

  /**@description 单位时间像素长度 */
  unitPixelOfTime: number;

  /**@description 轨道列表 */
  tracks: Track[];

  /**@description 帧率 */
  fps: number;

  /**@description 全局当前时间 */
  currentTime: number;
}

export abstract class EditorState {
  abstract setState(data: Partial<State>): void;
  abstract getState(): State;

  public getVideos() {
    return this.getState().videos;
  }

  public setVideos(videos: Video[]) {
    this.setState({
      videos,
    });
  }

  public setActiveVideoId(id: string) {
    this.setState({
      activeVideoId: id,
    });
  }

  public getActiveVideoId() {
    return this.getState().activeVideoId;
  }

  public getActiveVideo() {
    return this.getState().videos.find(
      (video) => video.id === this.getState().activeVideoId,
    );
  }

  
  public getUnitTime() {
    return this.getState().unitTime;
  }

  public setUnitTime(time: number) {
    this.setState({
      unitTime: time,
    });
  }

  public getUnitPixelOfTime() {
    return this.getState().unitPixelOfTime;
  }

  public setUnitPixelOfTime(pixel: number) {
    this.setState({
      unitPixelOfTime: pixel,
    });
  }

  public getTracks() {
    return this.getState().tracks;
  }

  public setTracks(tracks: Track[]) {
    this.setState({
      tracks,
    });
  }

  public getFps() {
    return this.getState().fps;
  }

  public setFps(fps: number) {
    this.setState({
      fps,
    });
  }

  public getCurrentTime() {
    return this.getState().currentTime;
  }

  public setCurrentTime(time: number) {
    this.setState({
      currentTime: time,
    });
  }
}
