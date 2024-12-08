import { CommandManager } from "./CommandManager.js";
import { ResourceManager } from "./ResourceManager.js";
import { TimeManager } from "./TimeManager.js";
import { EventEmitter } from "./EventEmitter.js";
import { VideoProcess } from "./VideoProcess.js";

import type { Events } from "../types/events.d.ts";

class Editor {
  eventEmitter: EventEmitter<Events>;
  resourceManager: ResourceManager;
  timeManager: TimeManager;
  videoProcess: VideoProcess;
  commandManager: CommandManager;

  constructor() {
    this.eventEmitter = new EventEmitter();
    this.resourceManager = new ResourceManager(this);
    this.videoProcess = new VideoProcess(this);
    this.timeManager = new TimeManager();
    this.commandManager = new CommandManager();
  }
}

export { Editor };
