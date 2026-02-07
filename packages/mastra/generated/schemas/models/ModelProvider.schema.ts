import * as z from 'zod';
import { ModelSchema } from './Model.schema';
import { ProviderSchema } from './Provider.schema';

export const ModelProviderSchema = z.object({
  model: z.lazy(() => ModelSchema),
  modelId: z.string(),
  provider: z.lazy(() => ProviderSchema),
  providerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ModelProviderType = z.infer<typeof ModelProviderSchema>;
