import * as z from 'zod';

export const MCPAgentServerScalarFieldEnumSchema = z.enum(['agentId', 'mcpServerId'])

export type MCPAgentServerScalarFieldEnum = z.infer<typeof MCPAgentServerScalarFieldEnumSchema>;