/**
 * 统一的 JSON 类型定义
 * 为 Prisma Json 字段提供类型支持
 *
 * @warning 此文件由 scripts/fix-circular-imports.ts 自动生成
 * 请勿手动编辑 - 重新运行 'pnpm generate' 来更新
 */

import { z } from "zod";

// JSON value 类型
export type JsonValue = string | number | boolean | null | JsonObject | JsonArray;

export interface JsonObject {
  [key: string]: JsonValue;
}

export interface JsonArray extends Array<JsonValue> {}

// Zod schema for JSON values
const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
export const JsonValueSchema: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([literalSchema, z.array(JsonValueSchema), z.record(z.string(), JsonValueSchema)])
);
