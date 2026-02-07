import * as z from 'zod';
export const AssistantSettingsFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});