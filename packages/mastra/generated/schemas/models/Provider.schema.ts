// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
import { ProviderTypeSchema } from '../enums/ProviderType.schema';
// Circular import removed: import { AssistantSchema } from './Assistant.schema';
// Circular import removed: import { GroupSchema } from './Group.schema';

export const ProviderSchema = z.object({
  id: z.string(),
  type: ProviderTypeSchema,
  name: z.string(),
  apiKey: z.string(),
  apiHost: z.string(),
  apiVersion: z.string().nullish(),
  enabled: z.boolean().default(true),
  isSystem: z.boolean(),
  isAuthed: z.boolean(),
  notes: z.string().nullish(),
  isGateway: z.boolean(),
  modelCount: z.number().int().nullish(),
  docsUrl: z.string().nullish(),
  groups: z.array(z.lazy(() => _r.GroupSchema)),
  createdAt: z.date(),
  updatedAt: z.date(),
  Assistant: z.array(z.lazy(() => _r.AssistantSchema)),
});

export type ProviderType = z.infer<typeof ProviderSchema>;

// Register to schema registry for circular reference resolution
_r.ProviderSchema = ProviderSchema;
