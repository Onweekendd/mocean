// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: import { AssistantSchema } from './Assistant.schema';
// Circular import removed: import { MCPServerSchema } from './MCPServer.schema';

export const MCPAssistantServerSchema = z.object({
  assistant: z.lazy(() => {
      const mod = require('./Assistant.schema');
      return mod.AssistantSchema;
    }),
  assistantId: z.string(),
  mcpServer: z.lazy(() => {
      const mod = require('./MCPServer.schema');
      return mod.MCPServerSchema;
    }),
  mcpServerId: z.string(),
});

export type MCPAssistantServerType = z.infer<typeof MCPAssistantServerSchema>;
