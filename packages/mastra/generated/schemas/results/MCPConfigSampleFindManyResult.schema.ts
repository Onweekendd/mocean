import * as z from 'zod';
export const MCPConfigSampleFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  command: z.string(),
  argsJson: z.unknown().optional(),
  env: z.unknown().optional(),
  server: z.unknown(),
  serverId: z.string()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});