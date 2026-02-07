import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  processingProgress: SortOrderSchema.optional(),
  retryCount: SortOrderSchema.optional()
}).strict();
export const KnowledgeItemSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeItemSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemSumOrderByAggregateInput>;
export const KnowledgeItemSumOrderByAggregateInputObjectZodSchema = makeSchema();
