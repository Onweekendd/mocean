import { z } from 'zod';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import type { AgentSchema } from './Agent.schema';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { AssistantSchema } from './Assistant.schema';
import type { TopicSchema } from './Topic.schema';

// Type extensions for TopicKnowledgeBase with relations
export interface TopicKnowledgeBaseWithRelations {
  topic?: z.infer<typeof TopicSchema>;
}
