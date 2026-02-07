import * as z from 'zod';
import { ModelSchema } from './Model.schema';

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
  model: z.lazy(() => ModelSchema),
  modelId: z.string(),
  rerankModel: z.lazy(() => ModelSchema).nullish(),
  rerankModelId: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type KnowledgeBaseType = z.infer<typeof KnowledgeBaseSchema>;
