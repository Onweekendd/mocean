import * as z from 'zod';

export const ProviderSchema = z.object({
  id: z.string(),
  type: z.string(),
  name: z.string(),
  apiKey: z.string(),
  apiHost: z.string(),
  apiVersion: z.string().nullish(),
  enabled: z.boolean().default(true),
  isSystem: z.boolean(),
  isAuthed: z.boolean(),
  notes: z.string().nullish(),
  iconType: z.string().nullish(),
  isGateway: z.boolean(),
  modelCount: z.number().int().nullish(),
  docsUrl: z.string().nullish(),

  createdAt: z.date(),
  updatedAt: z.date(),

});

export type ProviderType = z.infer<typeof ProviderSchema>;
