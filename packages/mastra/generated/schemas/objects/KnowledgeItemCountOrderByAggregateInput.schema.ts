import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  uniqueId: SortOrderSchema.optional(),
  uniqueIdsJson: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  remark: SortOrderSchema.optional(),
  processingStatus: SortOrderSchema.optional(),
  processingProgress: SortOrderSchema.optional(),
  processingError: SortOrderSchema.optional(),
  retryCount: SortOrderSchema.optional(),
  baseId: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const KnowledgeItemCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeItemCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemCountOrderByAggregateInput>;
export const KnowledgeItemCountOrderByAggregateInputObjectZodSchema = makeSchema();
