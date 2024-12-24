import { CommandManager } from "./CommandManager.ts";
import { TimeManager } from "./TimeManager.ts";
import { VideoProcess } from "./VideoProcess.ts";
import { EditorState } from "./EditorState.js";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";
import { Renderer } from "./Renderer.ts";

const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm";

class Editor {
  timeManager: TimeManager;
  videoProcess: VideoProcess;
  commandManager: CommandManager;
  renderer: Renderer;
  ffmpeg: FFmpeg;

  state: EditorState;

  constructor(state: EditorState) {
    this.state = state;

    this.ffmpeg = new FFmpeg();
    this.ffmpeg.on("progress", ({ progress, time }) => {
      console.log(progress, time);
    });

    this.videoProcess = new VideoProcess({
      ffmpeg: this.ffmpeg,
      state: this.state,
    });

    this.timeManager = new TimeManager();
    this.commandManager = new CommandManager();
  }

  static async build(store: EditorState) {
    const editor = new Editor(store);

    await editor.ffmpeg.load({
      classWorkerURL: "/ffmpeg/worker.js",
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
      ),
    });

    return editor;
  }
}

export { Editor };
