import type { Editor } from "./Editor.js";

class ResourceManager {
  videos: File[] = [];
  editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;
  }

  addVideo(video: File) {
    this.editor.eventEmitter.emitEvent("onVideoUpload", { video });
    this.videos.push(video);
  }
}

export { ResourceManager };
