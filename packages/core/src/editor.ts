import { CommandManager } from "./CommandManager.js";
import { ResourceManager } from "./ResourceManager.js";
import { TimeManager } from "./TimeManager.js";
import { VideoProcess } from "./VideoProcess.js";
import { EventEmitter } from "./interfaces/EventEmitter.js";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";

const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm";

type EditorEvents = {
  onChange: () => void;
  onFFmpegLog: ({ message }: { message: string }) => void;
};

class Editor extends EventEmitter<EditorEvents> {
  resourceManager: ResourceManager;
  timeManager: TimeManager;
  videoProcess: VideoProcess;
  commandManager: CommandManager;

  ffmpeg: FFmpeg;

  constructor() {
    super();

    this.resourceManager = new ResourceManager(this);
    this.videoProcess = new VideoProcess(this);
    this.timeManager = new TimeManager();
    this.commandManager = new CommandManager();

    this.ffmpeg = new FFmpeg();

    this.ffmpeg.on("progress", ({ progress, time }) => {
      console.log(progress, time);
    });
  }

  static async build() {
    const editor = new Editor();

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
