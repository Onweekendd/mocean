import * as z from 'zod';
export const ModelGroupUpsertResultSchema = z.object({
  model: z.unknown(),
  modelId: z.string(),
  group: z.unknown(),
  groupId: z.string(),
  provider: z.unknown(),
  providerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});