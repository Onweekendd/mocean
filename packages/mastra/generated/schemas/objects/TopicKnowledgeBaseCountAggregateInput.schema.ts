import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  topicId: z.literal(true).optional(),
  knowledgeBaseId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TopicKnowledgeBaseCountAggregateInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCountAggregateInputType>;
export const TopicKnowledgeBaseCountAggregateInputObjectZodSchema = makeSchema();
