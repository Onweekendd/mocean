import { v4 as uuidv4 } from "uuid";

import { CanvasRender } from "../../interfaces/CanvasRender";
import { Clip } from "../../interfaces/Clip";

class VideoClip implements Clip, CanvasRender {
  id: string;
  resourceId: string;
  name: string;
  startTimestamp: number;
  endTimestamp: number;
  type: "image" | "video" | "audio" | "text";

  x: number;
  y: number;
  renderWidth: number;
  renderHeight: number;

  constructor({
    resourceId,
    name,
    startTimestamp,
    endTimestamp,
  }: {
    resourceId: string;
    name: string;
    startTimestamp: number;
    endTimestamp: number;
  }) {
    this.id = uuidv4();
    this.resourceId = resourceId;
    this.name = name;
    this.startTimestamp = startTimestamp;
    this.endTimestamp = endTimestamp;
    this.type = "video";
  }
}

export { VideoClip };
