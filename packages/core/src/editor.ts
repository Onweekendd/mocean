import { CommandManager } from "./CommandManager.js";
import { ResourceManager } from "./ResourceManager.js";
import { TimeManager } from "./TimeManager.js";
import { EventEmitter } from "./EventEmitter.js";
import { VideoProcess } from "./VideoProcess.js";

import type { Events } from "../types/events.d.ts";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { toBlobURL } from "@ffmpeg/util";

const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.2/dist/umd";

class Editor {
  eventEmitter: EventEmitter<Events>;
  resourceManager: ResourceManager;
  timeManager: TimeManager;
  videoProcess: VideoProcess;
  commandManager: CommandManager;

  ffmpeg: FFmpeg;

  constructor() {
    this.eventEmitter = new EventEmitter();
    this.resourceManager = new ResourceManager(this);
    this.videoProcess = new VideoProcess(this);
    this.timeManager = new TimeManager();
    this.commandManager = new CommandManager();

    this.ffmpeg = new FFmpeg();
  }

  static async build() {
    debugger;
    const editor = new Editor();
    return editor;
  }
}

export { Editor };
