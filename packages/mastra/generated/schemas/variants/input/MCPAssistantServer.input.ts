import * as z from 'zod';
// prettier-ignore
export const MCPAssistantServerInputSchema = z.object({
    assistant: z.unknown(),
    assistantId: z.string(),
    mcpServer: z.unknown(),
    mcpServerId: z.string()
}).strict();

export type MCPAssistantServerInputType = z.infer<typeof MCPAssistantServerInputSchema>;
