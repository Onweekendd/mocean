import type { Editor } from "./Editor.ts";
import { EventEmitter } from "./interfaces/EventEmitter.js";

export type ResourceManagerEvents = {
  onVideoUpload: (payload: { video: File }) => void;
};

class ResourceManager extends EventEmitter<ResourceManagerEvents> {
  videos: File[] = [];
  editor: Editor;

  constructor(editor: Editor) {
    super();
    this.editor = editor;
  }

  addVideo(video: File) {
    this.videos.push(video);
    this.emit("onVideoUpload", { video });
  }
}

export { ResourceManager };
