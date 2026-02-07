import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  topicId: z.literal(true).optional(),
  knowledgeBaseId: z.literal(true).optional()
}).strict();
export const TopicKnowledgeBaseMinAggregateInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseMinAggregateInputType>;
export const TopicKnowledgeBaseMinAggregateInputObjectZodSchema = makeSchema();
