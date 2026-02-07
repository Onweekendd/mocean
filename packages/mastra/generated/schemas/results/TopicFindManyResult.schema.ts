import * as z from 'zod';
export const TopicFindManyResultSchema = z.object({
  data: z.array(z.object({
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