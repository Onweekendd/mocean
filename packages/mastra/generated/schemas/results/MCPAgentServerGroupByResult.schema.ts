import * as z from 'zod';
export const MCPAgentServerGroupByResultSchema = z.array(z.object({
  agentId: z.string(),
  mcpServerId: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));