import * as z from 'zod';
// prettier-ignore
export const MCPAgentServerModelSchema = z.object({
    agent: z.unknown(),
    agentId: z.string(),
    mcpServer: z.unknown(),
    mcpServerId: z.string()
}).strict();

export type MCPAgentServerPureType = z.infer<typeof MCPAgentServerModelSchema>;
