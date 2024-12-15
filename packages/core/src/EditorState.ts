import { Video } from "@/elements/Video.ts";

export interface State {
  videos: Video[];
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
}
