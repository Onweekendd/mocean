import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TopicKnowledgeBaseCountOrderByAggregateInputObjectSchema as TopicKnowledgeBaseCountOrderByAggregateInputObjectSchema } from './TopicKnowledgeBaseCountOrderByAggregateInput.schema';
import { TopicKnowledgeBaseMaxOrderByAggregateInputObjectSchema as TopicKnowledgeBaseMaxOrderByAggregateInputObjectSchema } from './TopicKnowledgeBaseMaxOrderByAggregateInput.schema';
import { TopicKnowledgeBaseMinOrderByAggregateInputObjectSchema as TopicKnowledgeBaseMinOrderByAggregateInputObjectSchema } from './TopicKnowledgeBaseMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  topicId: SortOrderSchema.optional(),
  knowledgeBaseId: SortOrderSchema.optional(),
  _count: z.lazy(() => TopicKnowledgeBaseCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TopicKnowledgeBaseMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TopicKnowledgeBaseMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TopicKnowledgeBaseOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseOrderByWithAggregationInput>;
export const TopicKnowledgeBaseOrderByWithAggregationInputObjectZodSchema = makeSchema();
