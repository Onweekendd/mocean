import { z } from 'zod';
import type { AssistantSchema } from './Assistant.schema';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import type { ModelSchema } from './Model.schema';
import type { GroupSchema } from './Group.schema';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { AgentSchema } from './Agent.schema';

// Type extensions for Provider with relations
export interface ProviderWithRelations {
  groups?: z.infer<typeof GroupSchema>[];
}
