import { z } from 'zod';
import type { AssistantSchema } from './Assistant.schema';
import type { AgentSchema } from './Agent.schema';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { MCPServerSchema } from './MCPServer.schema';
import type { MCPAgentServerSchema } from './MCPAgentServer.schema';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';

// Type extensions for MCPAssistantServer with relations
export interface MCPAssistantServerWithRelations {
  assistant?: z.infer<typeof AssistantSchema>;
}
