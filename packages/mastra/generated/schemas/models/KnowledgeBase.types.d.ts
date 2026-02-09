import { z } from 'zod';
import type { ModelSchema } from './Model.schema';
import type { AssistantSchema } from './Assistant.schema';

// Type extensions for KnowledgeBase with relations
export interface KnowledgeBaseWithRelations {
  model?: z.infer<typeof ModelSchema>;
}
