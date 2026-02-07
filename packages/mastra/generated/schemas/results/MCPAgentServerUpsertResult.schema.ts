import * as z from 'zod';
export const MCPAgentServerUpsertResultSchema = z.object({
  agent: z.unknown(),
  agentId: z.string(),
  mcpServer: z.unknown(),
  mcpServerId: z.string()
});