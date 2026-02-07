import * as z from 'zod';
export const ModelProviderCreateResultSchema = z.object({
  model: z.unknown(),
  modelId: z.string(),
  provider: z.unknown(),
  providerId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});