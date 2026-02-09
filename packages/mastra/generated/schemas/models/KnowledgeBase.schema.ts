// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: // Circular import removed: import { ModelSchema } from './Model.schema';


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
  model: z.lazy(() => {
      const mod = require('./Model.schema');
      return mod.ModelSchema;
    }),
  modelId: z.string(),
  rerankModel: z.lazy(() => {
      const mod = require('./Model.schema');
      return mod.ModelSchema;
    }).nullish(),
  rerankModelId: z.string().nullish(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type KnowledgeBaseType = z.infer<typeof KnowledgeBaseSchema>;
