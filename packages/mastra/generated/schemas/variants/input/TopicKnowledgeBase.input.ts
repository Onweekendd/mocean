import * as z from 'zod';
// prettier-ignore
export const TopicKnowledgeBaseInputSchema = z.object({
    topic: z.unknown(),
    topicId: z.string(),
    knowledgeBase: z.unknown(),
    knowledgeBaseId: z.string()
}).strict();

export type TopicKnowledgeBaseInputType = z.infer<typeof TopicKnowledgeBaseInputSchema>;
