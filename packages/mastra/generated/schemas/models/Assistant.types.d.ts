import { z } from 'zod';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import type { ModelSchema } from './Model.schema';

// Type extensions for Assistant with relations
export interface AssistantWithRelations {
  defaultModel?: z.infer<typeof ModelSchema>;
}
