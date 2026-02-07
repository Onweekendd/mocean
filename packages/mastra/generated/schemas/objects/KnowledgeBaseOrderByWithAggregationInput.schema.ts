import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { KnowledgeBaseCountOrderByAggregateInputObjectSchema as KnowledgeBaseCountOrderByAggregateInputObjectSchema } from './KnowledgeBaseCountOrderByAggregateInput.schema';
import { KnowledgeBaseAvgOrderByAggregateInputObjectSchema as KnowledgeBaseAvgOrderByAggregateInputObjectSchema } from './KnowledgeBaseAvgOrderByAggregateInput.schema';
import { KnowledgeBaseMaxOrderByAggregateInputObjectSchema as KnowledgeBaseMaxOrderByAggregateInputObjectSchema } from './KnowledgeBaseMaxOrderByAggregateInput.schema';
import { KnowledgeBaseMinOrderByAggregateInputObjectSchema as KnowledgeBaseMinOrderByAggregateInputObjectSchema } from './KnowledgeBaseMinOrderByAggregateInput.schema';
import { KnowledgeBaseSumOrderByAggregateInputObjectSchema as KnowledgeBaseSumOrderByAggregateInputObjectSchema } from './KnowledgeBaseSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  dimensions: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  documentCount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  chunkSize: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  chunkOverlap: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  threshold: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  version: SortOrderSchema.optional(),
  modelId: SortOrderSchema.optional(),
  rerankModelId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  _count: z.lazy(() => KnowledgeBaseCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => KnowledgeBaseAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => KnowledgeBaseMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => KnowledgeBaseMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => KnowledgeBaseSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseOrderByWithAggregationInput>;
export const KnowledgeBaseOrderByWithAggregationInputObjectZodSchema = makeSchema();
