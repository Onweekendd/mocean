import * as z from 'zod';
import { AgentSchema } from './Agent.schema';
import { MCPServerSchema } from './MCPServer.schema';

export const MCPAgentServerSchema = z.object({
  agent: z.lazy(() => AgentSchema),
  agentId: z.string(),
  mcpServer: z.lazy(() => MCPServerSchema),
  mcpServerId: z.string(),
});

export type MCPAgentServerType = z.infer<typeof MCPAgentServerSchema>;
