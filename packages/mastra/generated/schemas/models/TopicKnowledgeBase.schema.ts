import * as z from 'zod';

export const TopicKnowledgeBaseSchema = z.object({

  topicId: z.string(),

  knowledgeBaseId: z.string(),
});

export type TopicKnowledgeBaseType = z.infer<typeof TopicKnowledgeBaseSchema>;
