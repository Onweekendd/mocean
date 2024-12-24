import { EditorState } from "./EditorState.js";

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
    this.state.setState({
      renderingVideoIds: [...this.state.getRenderingList(), id],
    });
  }

  removeVideoFromRenderer(id: string) {
    this.state.setState({
      renderingVideoIds: this.state
        .getRenderingList()
        .filter((id) => id !== id),
    });
  }
}

export { Renderer };
