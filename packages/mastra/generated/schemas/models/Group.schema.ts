// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
// Circular import removed: import { ModelSchema } from './Model.schema';
// Circular import removed: import { ProviderSchema } from './Provider.schema';

export const GroupSchema = z.object({
  id: z.string(),
  name: z.string(),
  providerId: z.string(),
  isDefault: z.boolean(),
  provider: z.lazy(() => _r.ProviderSchema),
  models: z.array(z.lazy(() => _r.ModelSchema)),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type GroupType = z.infer<typeof GroupSchema>;

// Register to schema registry for circular reference resolution
_r.GroupSchema = GroupSchema;
