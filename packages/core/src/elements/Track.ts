import { v4 as uuidv4 } from "uuid";

import { Clip } from "./Clip";

export class Track {
  /**@description 轨道唯一标识 */
  id: string;

  /**@description 轨道名称 */
  name: string;

  /**@description 轨道是否可见 */
  visible: boolean;

  /**@description 轨道是否被锁定 */
  locked: boolean;

  /**@description 轨道元素 */
  elements: Clip[];

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
    this.visible = true;
    this.locked = false;
    this.elements = [];
  }
}
