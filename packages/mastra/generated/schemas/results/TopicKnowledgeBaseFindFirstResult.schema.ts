import * as z from 'zod';
export const TopicKnowledgeBaseFindFirstResultSchema = z.nullable(z.object({
  topic: z.unknown(),
  topicId: z.string(),
  knowledgeBase: z.unknown(),
  knowledgeBaseId: z.string()
}));