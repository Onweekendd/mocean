// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
import { ProviderTypeSchema } from '../enums/ProviderType.schema';
// Circular import removed: import { AssistantSchema } from './Assistant.schema';
// Circular import removed: import { GroupSchema } from './Group.schema';
// Circular import removed: import { ModelGroupSchema } from './ModelGroup.schema';
// Circular import removed: import { ModelProviderSchema } from './ModelProvider.schema';

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
  groups: z.array(z.lazy(() => {
      const mod = require('./Group.schema');
      return mod.GroupSchema;
    })),
  modelGroups: z.array(z.lazy(() => {
      const mod = require('./ModelGroup.schema');
      return mod.ModelGroupSchema;
    })),
  createdAt: z.date(),
  updatedAt: z.date(),
  Assistant: z.array(z.lazy(() => {
      const mod = require('./Assistant.schema');
      return mod.AssistantSchema;
    })),
  models: z.array(z.lazy(() => {
      const mod = require('./ModelProvider.schema');
      return mod.ModelProviderSchema;
    })),
});

export type ProviderType = z.infer<typeof ProviderSchema>;
