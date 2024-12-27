import { EditorState } from "./EditorState.js";
import type { Video } from "./index.js";

class Renderer {
  state: EditorState;
  width: number;
  height: number;

  constructor({
    state,
    width,
    height,
  }: {
    state: EditorState;
    width: number;
    height: number;
  }) {
    this.state = state;
    this.width = width;
    this.height = height;
  }

  addVideoToRenderer(id: string) {
    const video = this.state.getVideos().find((video) => video.id === id);
    const { width, height } = this.calculateDimensions(video);
    video.renderWidth = width;
    video.renderHeight = height;

    video.y = this.height / 2 - video.renderHeight / 2;

    this.state.setState({
      renderingVideoIds: [...this.state.getRenderingList(), id],
    });
  }

  /**
   * 计算视频渲染尺寸
   * @param video 视频
   * @returns 渲染尺寸
   */
  calculateDimensions = (video: Video) => {
    console.log(this.width, this.height);

    const videoRatio = video.width / video.height;

    let width = this.width;
    let height = this.width / videoRatio;

    if (height > this.height) {
      height = this.height;
      width = this.height * videoRatio;
    }

    return { width, height };
  };

  removeVideoFromRenderer(id: string) {
    this.state.setState({
      renderingVideoIds: this.state
        .getRenderingList()
        .filter((id) => id !== id),
    });
  }
}

export { Renderer };
