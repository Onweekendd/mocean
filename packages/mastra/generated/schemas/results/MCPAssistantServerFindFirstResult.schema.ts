import * as z from 'zod';
export const MCPAssistantServerFindFirstResultSchema = z.nullable(z.object({
  assistant: z.unknown(),
  assistantId: z.string(),
  mcpServer: z.unknown(),
  mcpServerId: z.string()
}));