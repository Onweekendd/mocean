export interface Clip {
  /** 唯一标识 */
  id: string;

  /** 名称 */
  name: string;

  /** 开始时间戳 */
  startTimestamp: number;

  /** 结束时间戳 */
  endTimestamp: number;
}
