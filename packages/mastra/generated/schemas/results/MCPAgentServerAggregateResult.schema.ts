import * as z from 'zod';
export const MCPAgentServerAggregateResultSchema = z.object({  _count: z.object({
    agent: z.number(),
    agentId: z.number(),
    mcpServer: z.number(),
    mcpServerId: z.number()
  }).optional(),
  _min: z.object({
    agentId: z.string().nullable(),
    mcpServerId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    agentId: z.string().nullable(),
    mcpServerId: z.string().nullable()
  }).nullable().optional()});