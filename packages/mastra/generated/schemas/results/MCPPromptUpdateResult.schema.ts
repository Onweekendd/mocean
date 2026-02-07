import * as z from 'zod';
export const MCPPromptUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  arguments: z.unknown().optional(),
  server: z.unknown(),
  serverId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));