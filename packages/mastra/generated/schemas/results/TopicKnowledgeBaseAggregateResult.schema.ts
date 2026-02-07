import * as z from 'zod';
export const TopicKnowledgeBaseAggregateResultSchema = z.object({  _count: z.object({
    topic: z.number(),
    topicId: z.number(),
    knowledgeBase: z.number(),
    knowledgeBaseId: z.number()
  }).optional(),
  _min: z.object({
    topicId: z.string().nullable(),
    knowledgeBaseId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    topicId: z.string().nullable(),
    knowledgeBaseId: z.string().nullable()
  }).nullable().optional()});