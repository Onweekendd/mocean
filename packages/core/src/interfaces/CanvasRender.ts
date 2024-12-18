interface CanvasRender {
  /**@description 渲染的x坐标 */
  x: number;

  /**@description 渲染的y坐标 */
  y: number;

  /**@description 渲染的宽度 */
  renderWidth: number;

  /**@description 渲染的高度 */
  renderHeight: number;

  /**@description 渲染的回调 */
  onRender: () => void;
}

export type { CanvasRender };
