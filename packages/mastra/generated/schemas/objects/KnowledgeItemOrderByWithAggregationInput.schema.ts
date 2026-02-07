import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { KnowledgeItemCountOrderByAggregateInputObjectSchema as KnowledgeItemCountOrderByAggregateInputObjectSchema } from './KnowledgeItemCountOrderByAggregateInput.schema';
import { KnowledgeItemAvgOrderByAggregateInputObjectSchema as KnowledgeItemAvgOrderByAggregateInputObjectSchema } from './KnowledgeItemAvgOrderByAggregateInput.schema';
import { KnowledgeItemMaxOrderByAggregateInputObjectSchema as KnowledgeItemMaxOrderByAggregateInputObjectSchema } from './KnowledgeItemMaxOrderByAggregateInput.schema';
import { KnowledgeItemMinOrderByAggregateInputObjectSchema as KnowledgeItemMinOrderByAggregateInputObjectSchema } from './KnowledgeItemMinOrderByAggregateInput.schema';
import { KnowledgeItemSumOrderByAggregateInputObjectSchema as KnowledgeItemSumOrderByAggregateInputObjectSchema } from './KnowledgeItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uniqueId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  uniqueIdsJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  remark: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  processingStatus: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  processingProgress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  processingError: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  retryCount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  baseId: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => KnowledgeItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => KnowledgeItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => KnowledgeItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => KnowledgeItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => KnowledgeItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const KnowledgeItemOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.KnowledgeItemOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemOrderByWithAggregationInput>;
export const KnowledgeItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
