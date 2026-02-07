import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uniqueId: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  remark: SortOrderSchema.optional(),
  processingStatus: SortOrderSchema.optional(),
  processingProgress: SortOrderSchema.optional(),
  processingError: SortOrderSchema.optional(),
  retryCount: SortOrderSchema.optional(),
  baseId: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const KnowledgeItemMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeItemMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemMinOrderByAggregateInput>;
export const KnowledgeItemMinOrderByAggregateInputObjectZodSchema = makeSchema();
