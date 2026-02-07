import * as z from 'zod';
import { ProviderSchema } from './Provider.schema';

export const GroupSchema = z.object({
  id: z.string(),
  name: z.string(),
  providerId: z.string(),
  isDefault: z.boolean(),
  provider: z.lazy(() => ProviderSchema),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type GroupType = z.infer<typeof GroupSchema>;
