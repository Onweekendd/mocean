import { z } from 'zod';
import type { AgentSchema } from './Agent.schema';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { AssistantSchema } from './Assistant.schema';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import type { ModelSchema } from './Model.schema';
import type { TopicKnowledgeBaseSchema } from './TopicKnowledgeBase.schema';

// Type extensions for Topic with relations
export interface TopicWithRelations {
  agent?: z.infer<typeof AgentSchema>;
  assistant?: z.infer<typeof AssistantSchema>;
  model?: z.infer<typeof ModelSchema>;
}
