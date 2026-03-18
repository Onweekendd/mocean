import * as z from 'zod';
import { AgentSchema } from './Agent.schema';
import { AssistantSchema } from './Assistant.schema';

export const AssistantSettingsSchema = z.object({
  id: z.string(),
  contextCount: z.number().int(),
  temperature: z.number(),
  topP: z.number(),
  maxTokens: z.number().int().nullish(),
  enableMaxTokens: z.boolean(),
  streamOutput: z.boolean().default(true),
  hideMessages: z.boolean(),
  customParameters: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  reasoning_effort: z.string().nullish(),
  qwenThinkMode: z.boolean().nullish(),
  toolUseMode: z.string().nullish(),
  assistant: z.lazy(() => AssistantSchema).nullish(),
  assistantId: z.string().nullish(),
  agent: z.lazy(() => AgentSchema).nullish(),
  agentId: z.string().nullish(),
  defaultModelId: z.string().nullish(),
});

export type AssistantSettingsType = z.infer<typeof AssistantSettingsSchema>;
