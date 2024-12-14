import type { Editor } from "./editor.js";
import { EventEmitter } from "./interfaces/EventEmitter.js";

export type ResourceManagerEvents = {
  onVideoUpload: (payload: { file: File; placeholderId?: string }) => void;
};

export type Files = {
  videos: File[];
  images: File[];
  audios: File[];
};

class ResourceManager extends EventEmitter<ResourceManagerEvents> {
  files: Files = {
    videos: [],
    images: [],
    audios: [],
  };
  editor: Editor;

  constructor(editor: Editor) {
    super();
    this.editor = editor;
  }

  addVideo({ video, placeholderId }: { video: File; placeholderId?: string }) {
    this.files.videos.push(video);

    this.emit("onVideoUpload", { file: video, placeholderId });
  }
}

export { ResourceManager };
