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

export const MCPPromptSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  arguments: JsonValueSchema.refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),

  serverId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MCPPromptType = z.infer<typeof MCPPromptSchema>;
