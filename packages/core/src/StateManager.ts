import { Editor } from "./editor.js";
import type { Files } from "./ResourceManager.js";
import type { Video } from "./elements/Video.js";

export interface EditorState {
  videos: Video[];
  files: Files;
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
      files: {
        videos: [],
        images: [],
        audios: [],
      },
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
    if (newState.files) {
      this.editor.resourceManager.files = newState.files;
    }

    if (newState.videos) {
      this.editor.videoProcess.videos = newState.videos;
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
      files: this.editor.resourceManager.files,
      videos: this.editor.videoProcess.videos,
    });
  }
}

export { StateManager };
