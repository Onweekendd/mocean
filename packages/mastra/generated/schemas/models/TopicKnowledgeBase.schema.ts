// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
// Circular import removed: import { KnowledgeBaseSchema } from './KnowledgeBase.schema';
// Circular import removed: import { TopicSchema } from './Topic.schema';

export const TopicKnowledgeBaseSchema = z.object({
  topic: z.lazy(() => _r.TopicSchema),
  topicId: z.string(),
  knowledgeBase: z.lazy(() => _r.KnowledgeBaseSchema),
  knowledgeBaseId: z.string(),
});

export type TopicKnowledgeBaseType = z.infer<typeof TopicKnowledgeBaseSchema>;

// Register to schema registry for circular reference resolution
_r.TopicKnowledgeBaseSchema = TopicKnowledgeBaseSchema;
