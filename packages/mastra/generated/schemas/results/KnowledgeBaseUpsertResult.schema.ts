import * as z from 'zod';
export const KnowledgeBaseUpsertResultSchema = z.object({
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
});