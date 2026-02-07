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
export const KnowledgeBaseMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseMaxOrderByAggregateInput>;
export const KnowledgeBaseMaxOrderByAggregateInputObjectZodSchema = makeSchema();
