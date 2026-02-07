import * as z from 'zod';
// prettier-ignore
export const MCPAgentServerInputSchema = z.object({
    agent: z.unknown(),
    agentId: z.string(),
    mcpServer: z.unknown(),
    mcpServerId: z.string()
}).strict();

export type MCPAgentServerInputType = z.infer<typeof MCPAgentServerInputSchema>;
