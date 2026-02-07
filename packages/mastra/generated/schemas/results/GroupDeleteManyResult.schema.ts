import * as z from 'zod';
export const GroupDeleteManyResultSchema = z.object({
  count: z.number()
});