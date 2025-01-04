import { v4 as uuidv4 } from "uuid";

import { CanvasRender } from "../interfaces/CanvasRender";
import { Clip } from "../interfaces/Clip";
import { BaseElement } from "./BaseElement";

export class Track {
  /**@description 轨道唯一标识 */
  id: string;

  /**@description 轨道名称 */
  name: string;

  /**@description 轨道是否可见 */
  visible: boolean;

  /**@description 轨道是否被锁定 */
  locked: boolean;

  /**@description 可渲染的轨道元素 */
  renderElements: Array<Clip<BaseElement> & CanvasRender>;

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
    this.visible = true;
    this.locked = false;
    this.renderElements = [];
  }

  getRenderElementsAtTime(
    currentTime: number,
  ): Clip<BaseElement> & CanvasRender {
    const element = this.renderElements.find(
      (element) =>
        currentTime >= element.startTimestamp &&
        currentTime <= element.endTimestamp,
    );
    return element;
  }
}
