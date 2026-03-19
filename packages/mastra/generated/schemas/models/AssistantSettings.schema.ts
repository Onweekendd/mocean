import * as z from 'zod';

// JSON value schema for Prisma Json fields
export type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
export interface JsonObject {
  [key: string]: JsonValue;
}
export interface JsonArray extends Array<JsonValue> {}

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
const JsonValueSchema: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([literalSchema, z.array(JsonValueSchema), z.record(z.string(), JsonValueSchema)])
);

export const AssistantSettingsSchema = z.object({
  id: z.string(),
  contextCount: z.number().int(),
  temperature: z.number(),
  topP: z.number(),
  maxTokens: z.number().int().nullish(),
  enableMaxTokens: z.boolean(),
  streamOutput: z.boolean().default(true),
  hideMessages: z.boolean(),
  customParameters: JsonValueSchema.refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  reasoning_effort: z.string().nullish(),
  qwenThinkMode: z.boolean().nullish(),
  toolUseMode: z.string().nullish(),

  assistantId: z.string().nullish(),

  agentId: z.string().nullish(),
  defaultModelId: z.string().nullish(),
});

export type AssistantSettingsType = z.infer<typeof AssistantSettingsSchema>;
