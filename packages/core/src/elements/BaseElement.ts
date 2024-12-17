interface BaseElement {
  /**@description 唯一标识 */
  id: string;

  /**@description 名称 */
  name: string;

  /**@description 文件大小 */
  fileSize: number;

  /**@description 文件类型 */
  fileType: string;

  /**@description 文件路径 */
  fileUrl: string;

  /**@description 文件创建时间 */
  createTime: Date;
}

export type { BaseElement };
