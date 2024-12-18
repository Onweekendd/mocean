import type { TimelineProcess } from "../interfaces/TimelineProcess.js";
import type { CanvasRender } from "../interfaces/CanvasRender.js";
import type { BaseTransform } from "../interfaces/BaseTransform.js";
import type { BaseElement } from "./BaseElement.js";
import { v4 as uuidv4 } from "uuid";

class Video
  implements BaseElement, TimelineProcess, CanvasRender, BaseTransform
{
  id: string;

  /**@description 状态 */
  status: "processing" | "finished" | "error";

  name: string;
  fileSize: number;
  fileType: string;
  fileUrl: string;
  createTime: Date;

  x: number;
  y: number;
  renderWidth: number;
  renderHeight: number;

  /**@description 宽度 */
  width: number;

  /**@description 高度 */
  height: number;

  /**@description 时长 */
  duration: number;

  /**@description 帧率 */
  frameRate: number;

  /**@description 封面图片 */
  cover: string;

  constructor({
    name,
    fileSize,
    fileType,
    fileUrl,
    width,
    height,
    frameRate,
    createTime,
    duration,
    cover,
    x,
    y,
    renderWidth,
    renderHeight,
  }: {
    name?: string;
    fileSize?: number;
    fileType?: string;
    fileUrl?: string;
    width?: number;
    height?: number;
    frameRate?: number;
    createTime?: Date;
    duration?: number;
    cover?: string;
    x?: number;
    y?: number;
    renderWidth?: number;
    renderHeight?: number;
  } = {}) {
    this.id = uuidv4();
    this.status = "processing";

    this.name = name || "";
    this.fileSize = fileSize || 0;
    this.fileType = fileType || "";

    this.createTime = createTime || new Date();
    this.fileUrl = fileUrl || "";
    this.duration = duration || 0;
    this.frameRate = frameRate || 0;
    this.cover = cover || "";
    this.width = width || 0;
    this.height = height || 0;

    this.x = x || 0;
    this.y = y || 0;
    this.renderWidth = renderWidth || 0;
    this.renderHeight = renderHeight || 0;
  }

  onSplit = () => {
    console.log("onSplit");
  };

  onMerge = () => {
    console.log("onMerge");
  };

  onRender = () => {
    console.log("onRender");
  };

  onTranslate = (x: number, y: number, z: number) => {
    console.log("onTranslate");
  };

  onRotate = (x: number, y: number, z: number) => {
    console.log("onRotate");
  };

  onScale = (x: number, y: number, z: number) => {
    console.log("onScale");
  };
}

export { Video };
