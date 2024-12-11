import { Editor } from "./Editor.js";

class VideoProcess {
  editor: Editor;

  constructor(editor: Editor) {
    this.editor = editor;

    this.editor.resourceManager.on("onVideoUpload", this.onVideoUpload);
  }

  onVideoUpload = ({ video }: { video: File }) => {
    console.log(video);
  };
}

export { VideoProcess };
