import { Video } from "./elements/Video.ts";

export interface State {
  /**@description 当前激活的视频Id */
  activeVideoId: string;

  /**@description 视频列表 */
  videos: Video[];

  /**@description 文件名列表 */
  filesName: string[];

  /**@description 正在渲染的视频Id列表 */
  renderingVideoIds: string[];
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
      (video) => video.id === this.getState().activeVideoId
    );
  }

  public getRenderingList() {
    return this.getState().renderingVideoIds;
  }
}
