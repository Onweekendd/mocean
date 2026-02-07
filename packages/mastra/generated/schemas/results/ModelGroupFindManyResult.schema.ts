import * as z from 'zod';
export const ModelGroupFindManyResultSchema = z.object({
  data: z.array(z.object({
  model: z.unknown(),
  modelId: z.string(),
  group: z.unknown(),
  groupId: z.string(),
  provider: z.unknown(),
  providerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
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