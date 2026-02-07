import * as z from 'zod';
export const ModelCreateManyResultSchema = z.object({
  count: z.number()
});