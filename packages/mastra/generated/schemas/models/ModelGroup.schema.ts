import * as z from 'zod';
import { GroupSchema } from './Group.schema';
import { ModelSchema } from './Model.schema';
import { ProviderSchema } from './Provider.schema';

export const ModelGroupSchema = z.object({
  model: z.lazy(() => ModelSchema),
  modelId: z.string(),
  group: z.lazy(() => GroupSchema),
  groupId: z.string(),
  provider: z.lazy(() => ProviderSchema),
  providerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ModelGroupType = z.infer<typeof ModelGroupSchema>;
