import * as z from 'zod';
export const TopicKnowledgeBaseUpsertResultSchema = z.object({
  topic: z.unknown(),
  topicId: z.string(),
  knowledgeBase: z.unknown(),
  knowledgeBaseId: z.string()
});