import * as z from 'zod';
export const ProviderFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  type: z.unknown(),
  name: z.string(),
  apiKey: z.string(),
  apiHost: z.string(),
  apiVersion: z.string().optional(),
  enabled: z.boolean(),
  isSystem: z.boolean(),
  isAuthed: z.boolean(),
  notes: z.string().optional(),
  isGateway: z.boolean(),
  modelCount: z.number().int().optional(),
  docsUrl: z.string().optional(),
  groups: z.array(z.unknown()),
  modelGroups: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date(),
  Assistant: z.array(z.unknown()),
  models: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});