// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: import { AgentSchema } from './Agent.schema';
// Circular import removed: import { MCPServerSchema } from './MCPServer.schema';

export const MCPAgentServerSchema = z.object({
  agent: z.lazy(() => {
      const mod = require('./Agent.schema');
      return mod.AgentSchema;
    }),
  agentId: z.string(),
  mcpServer: z.lazy(() => {
      const mod = require('./MCPServer.schema');
      return mod.MCPServerSchema;
    }),
  mcpServerId: z.string(),
});

export type MCPAgentServerType = z.infer<typeof MCPAgentServerSchema>;
