/**
 * Schema Registry - 用于解决循环引用
 * Auto-generated - do not edit manually
 *
 * 所有存在循环引用的 schema 文件会将自身注册到此 registry 中，
 * 并通过 z.lazy(() => _r.XxxSchema) 引用其他 schema，
 * 避免循环 import 导致的运行时和类型问题。
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const _r: Record<string, any> = {};
