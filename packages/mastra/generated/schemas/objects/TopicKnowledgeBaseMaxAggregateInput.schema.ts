import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  topicId: z.literal(true).optional(),
  knowledgeBaseId: z.literal(true).optional()
}).strict();
export const TopicKnowledgeBaseMaxAggregateInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseMaxAggregateInputType>;
export const TopicKnowledgeBaseMaxAggregateInputObjectZodSchema = makeSchema();
