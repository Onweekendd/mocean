import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  dimensions: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  documentCount: SortOrderSchema.optional(),
  chunkSize: SortOrderSchema.optional(),
  chunkOverlap: SortOrderSchema.optional(),
  threshold: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  modelId: SortOrderSchema.optional(),
  rerankModelId: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const KnowledgeBaseMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseMinOrderByAggregateInput>;
export const KnowledgeBaseMinOrderByAggregateInputObjectZodSchema = makeSchema();
