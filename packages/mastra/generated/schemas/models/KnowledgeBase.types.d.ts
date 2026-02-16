import { z } from 'zod';
import type { AgentSchema } from './Agent.schema';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { AssistantSchema } from './Assistant.schema';
import type { KnowledgeItemSchema } from './KnowledgeItem.schema';
import type { ModelSchema } from './Model.schema';
import type { GroupSchema } from './Group.schema';
import type { ProviderSchema } from './Provider.schema';
import type { TopicKnowledgeBaseSchema } from './TopicKnowledgeBase.schema';
import type { TopicSchema } from './Topic.schema';
import type { MCPAssistantServerSchema } from './MCPAssistantServer.schema';
import type { MCPServerSchema } from './MCPServer.schema';
import type { MCPAgentServerSchema } from './MCPAgentServer.schema';

// Type extensions for KnowledgeBase with relations
export interface KnowledgeBaseWithRelations {
  agents?: z.infer<typeof AgentSchema>[];
  assistants?: z.infer<typeof AssistantSchema>[];
  topics?: z.infer<typeof TopicSchema>[];
}
