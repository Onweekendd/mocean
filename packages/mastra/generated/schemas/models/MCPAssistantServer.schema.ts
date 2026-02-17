// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
// Circular import removed: import { AssistantSchema } from './Assistant.schema';
// Circular import removed: import { MCPServerSchema } from './MCPServer.schema';

export const MCPAssistantServerSchema = z.object({
  assistant: z.lazy(() => _r.AssistantSchema),
  assistantId: z.string(),
  mcpServer: z.lazy(() => _r.MCPServerSchema),
  mcpServerId: z.string(),
});

export type MCPAssistantServerType = z.infer<typeof MCPAssistantServerSchema>;

// Register to schema registry for circular reference resolution
_r.MCPAssistantServerSchema = MCPAssistantServerSchema;
