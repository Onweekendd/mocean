// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: import { ModelSchema } from './Model.schema';
// Circular import removed: import { ProviderSchema } from './Provider.schema';

export const GroupSchema = z.object({
  id: z.string(),
  name: z.string(),
  providerId: z.string(),
  isDefault: z.boolean(),
  provider: z.lazy(() => {
      const mod = require('./Provider.schema');
      return mod.ProviderSchema;
    }),
  models: z.array(z.lazy(() => {
      const mod = require('./Model.schema');
      return mod.ModelSchema;
    })),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type GroupType = z.infer<typeof GroupSchema>;
