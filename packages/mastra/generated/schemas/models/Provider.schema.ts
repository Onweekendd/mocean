import * as z from 'zod';
import { ProviderTypeSchema } from '../enums/ProviderType.schema';
import { AssistantSchema } from './Assistant.schema';

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
  createdAt: z.date(),
  updatedAt: z.date(),
  Assistant: z.array(z.lazy(() => AssistantSchema)),
});

export type ProviderType = z.infer<typeof ProviderSchema>;
