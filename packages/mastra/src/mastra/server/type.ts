/**
 * 工具类型：提取异步函数的返回类型
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
export type AsyncReturnType<T> = T extends (..._args: any[]) => Promise<infer R>
  ? R
  : never;
