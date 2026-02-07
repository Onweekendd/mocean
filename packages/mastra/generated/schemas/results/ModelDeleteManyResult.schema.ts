import * as z from 'zod';
export const ModelDeleteManyResultSchema = z.object({
  count: z.number()
});