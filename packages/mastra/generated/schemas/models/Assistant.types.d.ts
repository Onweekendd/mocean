import { z } from 'zod';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { AgentSchema } from './Agent.schema';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import type { ModelSchema } from './Model.schema';
import type { ModelGroupSchema } from './ModelGroup.schema';
import type { GroupSchema } from './Group.schema';
import type { ProviderSchema } from './Provider.schema';
import type { TopicSchema } from './Topic.schema';
import type { MCPAssistantServerSchema } from './MCPAssistantServer.schema';
import type { MCPServerSchema } from './MCPServer.schema';
import type { MCPAgentServerSchema } from './MCPAgentServer.schema';
import type { TopicKnowledgeBaseSchema } from './TopicKnowledgeBase.schema';
import type { ModelProviderSchema } from './ModelProvider.schema';

// Type extensions for Assistant with relations
export interface AssistantWithRelations {
  model?: z.infer<typeof ModelSchema>;
  defaultModel?: z.infer<typeof ModelSchema>;
  provider?: z.infer<typeof ProviderSchema>;
  topics?: z.infer<typeof TopicSchema>[];
}
