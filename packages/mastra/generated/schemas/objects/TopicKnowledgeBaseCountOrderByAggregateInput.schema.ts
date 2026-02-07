import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  topicId: SortOrderSchema.optional(),
  knowledgeBaseId: SortOrderSchema.optional()
}).strict();
export const TopicKnowledgeBaseCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCountOrderByAggregateInput>;
export const TopicKnowledgeBaseCountOrderByAggregateInputObjectZodSchema = makeSchema();
