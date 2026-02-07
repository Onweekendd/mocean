import * as z from 'zod';
export const MCPServerCreateManyResultSchema = z.object({
  count: z.number()
});