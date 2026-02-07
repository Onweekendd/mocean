import * as z from 'zod';
export const MCPAgentServerDeleteResultSchema = z.nullable(z.object({
  agent: z.unknown(),
  agentId: z.string(),
  mcpServer: z.unknown(),
  mcpServerId: z.string()
}));