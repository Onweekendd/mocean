import * as z from 'zod';
// prettier-ignore
export const MCPAssistantServerModelSchema = z.object({
    assistant: z.unknown(),
    assistantId: z.string(),
    mcpServer: z.unknown(),
    mcpServerId: z.string()
}).strict();

export type MCPAssistantServerPureType = z.infer<typeof MCPAssistantServerModelSchema>;
