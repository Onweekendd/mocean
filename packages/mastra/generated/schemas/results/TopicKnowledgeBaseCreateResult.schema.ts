import * as z from 'zod';
export const TopicKnowledgeBaseCreateResultSchema = z.object({
  topic: z.unknown(),
  topicId: z.string(),
  knowledgeBase: z.unknown(),
  knowledgeBaseId: z.string()
});