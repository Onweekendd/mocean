// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: import { KnowledgeBaseSchema } from './KnowledgeBase.schema';
// Circular import removed: import { TopicSchema } from './Topic.schema';

export const TopicKnowledgeBaseSchema = z.object({
  topic: z.lazy(() => {
      const mod = require('./Topic.schema');
      return mod.TopicSchema;
    }),
  topicId: z.string(),
  knowledgeBase: z.lazy(() => {
      const mod = require('./KnowledgeBase.schema');
      return mod.KnowledgeBaseSchema;
    }),
  knowledgeBaseId: z.string(),
});

export type TopicKnowledgeBaseType = z.infer<typeof TopicKnowledgeBaseSchema>;
