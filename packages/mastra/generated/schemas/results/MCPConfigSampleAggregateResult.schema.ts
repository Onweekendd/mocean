import * as z from 'zod';
export const MCPConfigSampleAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});