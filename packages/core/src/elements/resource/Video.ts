import { v4 as uuidv4 } from "uuid";

import type { BaseElement } from "../BaseElement.js";

class Video implements BaseElement {
  id: string;

  /**@description 状态 */
  status: "processing" | "finished" | "error";

  name: string;
  fileSize: number;
  fileType: string;
  fileUrl: string;
  createTime: Date;

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
  }
}

export { Video };
