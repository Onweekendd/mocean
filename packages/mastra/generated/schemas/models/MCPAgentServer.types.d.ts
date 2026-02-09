import { z } from 'zod';
import type { AgentSchema } from './Agent.schema';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { AssistantSchema } from './Assistant.schema';
import type { MCPAssistantServerSchema } from './MCPAssistantServer.schema';
import type { MCPServerSchema } from './MCPServer.schema';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';

// Type extensions for MCPAgentServer with relations
export interface MCPAgentServerWithRelations {
  agent?: z.infer<typeof AgentSchema>;
}
