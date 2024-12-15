import { Video } from "./elements/Video.ts";

export interface State {
  activeVideoId: string;
  videos: Video[];
  filesName: string[];
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
}
