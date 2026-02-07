import * as z from 'zod';
export const ProviderDeleteManyResultSchema = z.object({
  count: z.number()
});