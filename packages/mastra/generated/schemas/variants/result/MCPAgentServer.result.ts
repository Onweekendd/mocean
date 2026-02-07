import * as z from 'zod';
// prettier-ignore
export const MCPAgentServerResultSchema = z.object({
    agent: z.unknown(),
    agentId: z.string(),
    mcpServer: z.unknown(),
    mcpServerId: z.string()
}).strict();

export type MCPAgentServerResultType = z.infer<typeof MCPAgentServerResultSchema>;
