import * as z from 'zod';
export const AssistantSettingsCreateResultSchema = z.object({
  id: z.string(),
  contextCount: z.number().int(),
  temperature: z.number(),
  topP: z.number(),
  maxTokens: z.number().int().optional(),
  enableMaxTokens: z.boolean(),
  streamOutput: z.boolean(),
  hideMessages: z.boolean(),
  customParameters: z.unknown().optional(),
  reasoning_effort: z.string().optional(),
  qwenThinkMode: z.boolean().optional(),
  toolUseMode: z.string().optional(),
  assistant: z.unknown().optional(),
  assistantId: z.string().optional(),
  agent: z.unknown().optional(),
  agentId: z.string().optional(),
  defaultModel: z.unknown().optional(),
  defaultModelId: z.string().optional()
});