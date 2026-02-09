// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: import { ModelSchema } from './Model.schema';
// Circular import removed: import { ProviderSchema } from './Provider.schema';

export const ModelProviderSchema = z.object({
  model: z.lazy(() => {
      const mod = require('./Model.schema');
      return mod.ModelSchema;
    }),
  modelId: z.string(),
  provider: z.lazy(() => {
      const mod = require('./Provider.schema');
      return mod.ProviderSchema;
    }),
  providerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ModelProviderType = z.infer<typeof ModelProviderSchema>;
