import * as z from 'zod';
export const MCPServerDeleteManyResultSchema = z.object({
  count: z.number()
});