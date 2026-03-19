import * as z from 'zod';

export const MCPAssistantServerSchema = z.object({

  assistantId: z.string(),

  mcpServerId: z.string(),
});

export type MCPAssistantServerType = z.infer<typeof MCPAssistantServerSchema>;
