import * as z from 'zod';
export const GroupUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  providerId: z.string(),
  isDefault: z.boolean(),
  provider: z.unknown(),
  models: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));