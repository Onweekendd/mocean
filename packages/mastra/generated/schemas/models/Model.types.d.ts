import { z } from 'zod';
import type { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import type { AssistantSchema } from './Assistant.schema';

// Type extensions for Model with relations
export interface ModelWithRelations {
  assistants?: z.infer<typeof AssistantSchema>[];
  defaultForAssistants?: z.infer<typeof AssistantSchema>[];
}
