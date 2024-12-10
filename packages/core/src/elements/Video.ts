import type { TimelineProcess } from "../interfaces/TimelineProcess.js";
import type { CanvasRender } from "../interfaces/CanvasRender.js";
import type { BaseTransform } from "../interfaces/BaseTransform.js";
import type { BaseElement } from "./BaseElement.js";

class Video
  implements BaseElement, TimelineProcess, CanvasRender, BaseTransform
{
  /**@description 文件 */
  file: File;

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

  constructor(file: File) {
    this.file = file;
    this.name = file.name;
    this.fileSize = file.size;
    this.fileType = file.type;
    this.createTime = new Date();
    this.duration = 0;
    this.frameRate = 0;
    this.width = 0;
    this.height = 0;
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
