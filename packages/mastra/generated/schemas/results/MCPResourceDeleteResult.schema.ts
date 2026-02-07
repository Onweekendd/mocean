import * as z from 'zod';
export const MCPResourceDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  uri: z.string(),
  name: z.string(),
  description: z.string().optional(),
  mimeType: z.string().optional(),
  size: z.number().int().optional(),
  text: z.string().optional(),
  blob: z.string().optional(),
  server: z.unknown(),
  serverId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));