import * as z from 'zod';
export const TopicUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  prompt: z.string().optional(),
  pinned: z.boolean(),
  isNameManuallyEdited: z.boolean(),
  assistant: z.unknown().optional(),
  assistantId: z.string().optional(),
  agent: z.unknown().optional(),
  agentId: z.string().optional(),
  modelId: z.string().optional(),
  model: z.unknown().optional(),
  knowledgeBases: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});