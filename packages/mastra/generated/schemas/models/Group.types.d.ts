import { z } from 'zod';
import type { ModelGroupSchema } from './ModelGroup.schema';
import type { AssistantSchema } from './Assistant.schema';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import type { ModelSchema } from './Model.schema';
import type { ProviderSchema } from './Provider.schema';
import type { ModelProviderSchema } from './ModelProvider.schema';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { AgentSchema } from './Agent.schema';

// Type extensions for Group with relations
export interface GroupWithRelations {
  models?: z.infer<typeof ModelSchema>[];
  provider?: z.infer<typeof ProviderSchema>;
}
