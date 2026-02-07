import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  topicId: SortOrderSchema.optional(),
  knowledgeBaseId: SortOrderSchema.optional()
}).strict();
export const TopicKnowledgeBaseMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseMaxOrderByAggregateInput>;
export const TopicKnowledgeBaseMaxOrderByAggregateInputObjectZodSchema = makeSchema();
