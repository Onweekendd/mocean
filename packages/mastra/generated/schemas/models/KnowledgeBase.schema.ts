import * as z from 'zod';

export const KnowledgeBaseSchema = z.object({
  id: z.string(),
  name: z.string(),
  dimensions: z.number().int(),
  description: z.string().nullish(),
  documentCount: z.number().int().nullish(),
  chunkSize: z.number().int().nullish(),
  chunkOverlap: z.number().int().nullish(),
  threshold: z.number().nullish(),
  version: z.number().int(),

  modelId: z.string(),

  rerankModelId: z.string().nullish(),

  created_at: z.date(),
  updated_at: z.date(),
});

export type KnowledgeBaseType = z.infer<typeof KnowledgeBaseSchema>;
