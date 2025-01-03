import { CanvasRender } from "../../interfaces/CanvasRender";
import { Clip } from "../../interfaces/Clip";

class VideoClip implements Clip, CanvasRender {
  id: string;
  name: string;
  startTimestamp: number;
  endTimestamp: number;

  x: number;
  y: number;
  renderWidth: number;
  renderHeight: number;

  constructor(
    id: string,
    name: string,
    startTimestamp: number,
    endTimestamp: number,
  ) {
    this.id = id;
    this.name = name;
    this.startTimestamp = startTimestamp;
    this.endTimestamp = endTimestamp;
  }

  onRender = () => {};
}

export { VideoClip };
