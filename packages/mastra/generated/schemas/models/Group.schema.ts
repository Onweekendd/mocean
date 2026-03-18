import * as z from 'zod';
import { ModelSchema } from './Model.schema';
import { ProviderSchema } from './Provider.schema';

export const GroupSchema = z.object({
  id: z.string(),
  name: z.string(),
  providerId: z.string(),
  isDefault: z.boolean(),
  provider: z.lazy(() => ProviderSchema),
  models: z.array(z.lazy(() => ModelSchema)),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type GroupType = z.infer<typeof GroupSchema>;
