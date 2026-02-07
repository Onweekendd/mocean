import * as z from 'zod';
export const MCPToolUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  inputSchema: z.unknown(),
  server: z.unknown(),
  serverId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));