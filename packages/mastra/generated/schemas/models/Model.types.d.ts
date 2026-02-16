import { z } from 'zod';
import type { AssistantSchema } from './Assistant.schema';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import type { GroupSchema } from './Group.schema';
import type { ProviderSchema } from './Provider.schema';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { AgentSchema } from './Agent.schema';

// Type extensions for Model with relations
export interface ModelWithRelations {
  assistants?: z.infer<typeof AssistantSchema>[];
  defaultForAssistants?: z.infer<typeof AssistantSchema>[];
  group?: z.infer<typeof GroupSchema>;
}
