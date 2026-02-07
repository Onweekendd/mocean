import * as z from 'zod';
// prettier-ignore
export const TopicKnowledgeBaseModelSchema = z.object({
    topic: z.unknown(),
    topicId: z.string(),
    knowledgeBase: z.unknown(),
    knowledgeBaseId: z.string()
}).strict();

export type TopicKnowledgeBasePureType = z.infer<typeof TopicKnowledgeBaseModelSchema>;
