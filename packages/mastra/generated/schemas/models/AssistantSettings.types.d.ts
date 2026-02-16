import { z } from 'zod';
import type { AgentSchema } from './Agent.schema';
import type { AssistantSchema } from './Assistant.schema';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import type { TopicKnowledgeBaseSchema } from './TopicKnowledgeBase.schema';
import type { TopicSchema } from './Topic.schema';
import type { MCPAssistantServerSchema } from './MCPAssistantServer.schema';
import type { MCPServerSchema } from './MCPServer.schema';
import type { MCPAgentServerSchema } from './MCPAgentServer.schema';
import type { ModelSchema } from './Model.schema';
import type { GroupSchema } from './Group.schema';
import type { ProviderSchema } from './Provider.schema';

// Type extensions for AssistantSettings with relations
export interface AssistantSettingsWithRelations {
  agent?: z.infer<typeof AgentSchema>;
  assistant?: z.infer<typeof AssistantSchema>;
}
