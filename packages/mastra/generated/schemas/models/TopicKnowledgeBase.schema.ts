import * as z from 'zod';
import { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import { TopicSchema } from './Topic.schema';

export const TopicKnowledgeBaseSchema = z.object({
  topic: z.lazy(() => TopicSchema),
  topicId: z.string(),
  knowledgeBase: z.lazy(() => KnowledgeBaseSchema),
  knowledgeBaseId: z.string(),
});

export type TopicKnowledgeBaseType = z.infer<typeof TopicKnowledgeBaseSchema>;
