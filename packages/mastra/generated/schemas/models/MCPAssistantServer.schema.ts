import * as z from 'zod';
import { AssistantSchema } from './Assistant.schema';
import { MCPServerSchema } from './MCPServer.schema';

export const MCPAssistantServerSchema = z.object({
  assistant: z.lazy(() => AssistantSchema),
  assistantId: z.string(),
  mcpServer: z.lazy(() => MCPServerSchema),
  mcpServerId: z.string(),
});

export type MCPAssistantServerType = z.infer<typeof MCPAssistantServerSchema>;
