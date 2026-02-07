import * as z from 'zod';
// prettier-ignore
export const MCPAssistantServerResultSchema = z.object({
    assistant: z.unknown(),
    assistantId: z.string(),
    mcpServer: z.unknown(),
    mcpServerId: z.string()
}).strict();

export type MCPAssistantServerResultType = z.infer<typeof MCPAssistantServerResultSchema>;
