import * as z from 'zod';
// prettier-ignore
export const TopicKnowledgeBaseResultSchema = z.object({
    topic: z.unknown(),
    topicId: z.string(),
    knowledgeBase: z.unknown(),
    knowledgeBaseId: z.string()
}).strict();

export type TopicKnowledgeBaseResultType = z.infer<typeof TopicKnowledgeBaseResultSchema>;
