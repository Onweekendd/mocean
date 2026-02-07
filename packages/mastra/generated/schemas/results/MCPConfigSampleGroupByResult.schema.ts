import * as z from 'zod';
export const MCPConfigSampleGroupByResultSchema = z.array(z.object({
  id: z.string(),
  command: z.string(),
  argsJson: z.unknown(),
  env: z.unknown(),
  serverId: z.string(),
  _count: z.object({
    id: z.number(),
    command: z.number(),
    argsJson: z.number(),
    env: z.number(),
    server: z.number(),
    serverId: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    command: z.string().nullable(),
    serverId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    command: z.string().nullable(),
    serverId: z.string().nullable()
  }).nullable().optional()
}));