// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
// Circular import removed: import { AgentSchema } from './Agent.schema';
// Circular import removed: import { MCPServerSchema } from './MCPServer.schema';

export const MCPAgentServerSchema = z.object({
  agent: z.lazy(() => _r.AgentSchema),
  agentId: z.string(),
  mcpServer: z.lazy(() => _r.MCPServerSchema),
  mcpServerId: z.string(),
});

export type MCPAgentServerType = z.infer<typeof MCPAgentServerSchema>;

// Register to schema registry for circular reference resolution
_r.MCPAgentServerSchema = MCPAgentServerSchema;
