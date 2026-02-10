import { z } from 'zod';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { AssistantSchema } from './Assistant.schema';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import type { ModelSchema } from './Model.schema';
import type { TopicSchema } from './Topic.schema';
import type { MCPAssistantServerSchema } from './MCPAssistantServer.schema';
import type { MCPServerSchema } from './MCPServer.schema';
import type { MCPAgentServerSchema } from './MCPAgentServer.schema';
import type { GroupSchema } from './Group.schema';
import type { ProviderSchema } from './Provider.schema';
import type { TopicKnowledgeBaseSchema } from './TopicKnowledgeBase.schema';

// Type extensions for Agent with relations
export interface AgentWithRelations {
  topics?: z.infer<typeof TopicSchema>[];
}
