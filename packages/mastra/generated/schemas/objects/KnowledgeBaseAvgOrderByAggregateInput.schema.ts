import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  dimensions: SortOrderSchema.optional(),
  documentCount: SortOrderSchema.optional(),
  chunkSize: SortOrderSchema.optional(),
  chunkOverlap: SortOrderSchema.optional(),
  threshold: SortOrderSchema.optional(),
  version: SortOrderSchema.optional()
}).strict();
export const KnowledgeBaseAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseAvgOrderByAggregateInput>;
export const KnowledgeBaseAvgOrderByAggregateInputObjectZodSchema = makeSchema();
