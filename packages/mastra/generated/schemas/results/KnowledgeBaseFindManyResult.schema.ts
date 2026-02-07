import * as z from 'zod';
export const KnowledgeBaseFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  dimensions: z.number().int(),
  description: z.string().optional(),
  documentCount: z.number().int().optional(),
  chunkSize: z.number().int().optional(),
  chunkOverlap: z.number().int().optional(),
  threshold: z.number().optional(),
  version: z.number().int(),
  assistants: z.array(z.unknown()),
  agents: z.array(z.unknown()),
  model: z.unknown(),
  modelId: z.string(),
  rerankModel: z.unknown().optional(),
  rerankModelId: z.string().optional(),
  items: z.array(z.unknown()),
  topics: z.array(z.unknown()),
  created_at: z.date(),
  updated_at: z.date()
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