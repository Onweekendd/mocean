// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: import { GroupSchema } from './Group.schema';
// Circular import removed: import { ModelSchema } from './Model.schema';
// Circular import removed: import { ProviderSchema } from './Provider.schema';

export const ModelGroupSchema = z.object({
  model: z.lazy(() => {
      const mod = require('./Model.schema');
      return mod.ModelSchema;
    }),
  modelId: z.string(),
  group: z.lazy(() => {
      const mod = require('./Group.schema');
      return mod.GroupSchema;
    }),
  groupId: z.string(),
  provider: z.lazy(() => {
      const mod = require('./Provider.schema');
      return mod.ProviderSchema;
    }),
  providerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ModelGroupType = z.infer<typeof ModelGroupSchema>;
