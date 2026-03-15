import * as z from 'zod';

// JSON value schema for Prisma Json fields
type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
interface JsonObject {
  [key: string]: JsonValue;
}
interface JsonArray extends Array<JsonValue> {}

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const JsonValueSchema: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([literalSchema, z.array(JsonValueSchema), z.record(z.string(), JsonValueSchema)])
);

export const KnowledgeItemSchema = z.object({
  id: z.string(),
  uniqueId: z.string().nullish(),
  uniqueIdsJson: JsonValueSchema.refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  type: z.string(),
  content: JsonValueSchema.refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10"),
  remark: z.string().nullish(),
  processingStatus: z.string().nullish(),
  processingProgress: z.number().nullish(),
  processingError: z.string().nullish(),
  retryCount: z.number().int().nullish(),

  baseId: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type KnowledgeItemType = z.infer<typeof KnowledgeItemSchema>;
