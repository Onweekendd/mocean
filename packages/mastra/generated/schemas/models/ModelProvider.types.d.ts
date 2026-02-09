import { z } from 'zod';
import type { ModelSchema } from './Model.schema';
import type { ModelGroupSchema } from './ModelGroup.schema';
import type { GroupSchema } from './Group.schema';
import type { ProviderSchema } from './Provider.schema';
import type { AssistantSchema } from './Assistant.schema';
import type { AssistantSettingsSchema } from './AssistantSettings.schema';
import type { AgentSchema } from './Agent.schema';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';

// Type extensions for ModelProvider with relations
export interface ModelProviderWithRelations {
  model?: z.infer<typeof ModelSchema>;
  provider?: z.infer<typeof ProviderSchema>;
}
