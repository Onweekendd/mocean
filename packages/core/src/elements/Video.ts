import type { TimelineProcess } from "../interfaces/TimelineProcess.js";
import type { CanvasRender } from "../interfaces/CanvasRender.js";
import type { BaseTransform } from "../interfaces/BaseTransform.js";
import type { BaseElement } from "./BaseElement.js";
import { v4 as uuidv4 } from "uuid";

class Video
  implements BaseElement, TimelineProcess, CanvasRender, BaseTransform
{
  id: string;

  name: string;

  fileSize: number;

  fileType: string;

  createTime: Date;

  /**@description 时长 */
  duration: number;

  /**@description 帧率 */
  frameRate: number;

  /**@description 宽度 */
  width: number;

  /**@description 高度 */
  height: number;

  /**@description 封面图片 */
  cover: string;

  constructor({
    name,
    fileSize,
    fileType,
    width,
    height,
    frameRate,
    createTime,
    duration,
    cover,
  }: {
    name: string;
    fileSize: number;
    fileType: string;
    width: number;
    height: number;
    frameRate: number;
    createTime: Date;
    duration: number;
    cover: string;
  }) {
    this.id = uuidv4();
    this.name = name;
    this.fileSize = fileSize;
    this.fileType = fileType;
    this.createTime = createTime;
    this.duration = duration;
    this.frameRate = frameRate;
    this.width = width;
    this.height = height;
    this.cover = cover;
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
