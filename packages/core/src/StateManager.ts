import { Editor } from "./Editor.js";

interface EditorState {
  videos: File[];
}

type Listener = (state: EditorState) => void;

class StateManager {
  /** 编辑器实例 */
  editor: Editor;

  /** 编辑器状态 */
  state: EditorState;

  /** 监听器 */
  listeners: Set<Listener>;

  constructor(editor: Editor) {
    this.editor = editor;
    this.listeners = new Set();
    this.state = {
      videos: [],
    };

    this.editor.on("onChange", () => {
      this.syncFromEditor();
    });
  }

  getState() {
    return { ...this.state };
  }

  setState(newState: Partial<EditorState>) {
    this.state = {
      ...this.state,
      ...newState,
    };

    // 同步到编辑器
    if (newState.videos) {
      this.editor.resourceManager.videos = newState.videos;
    }

    this.notifyListeners();
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.state));
  }

  syncFromEditor() {
    this.setState({
      videos: this.editor.resourceManager.videos,
    });
  }
}

export { StateManager };
