import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const QuickPhraseMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuickPhraseMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseMinOrderByAggregateInput>;
export const QuickPhraseMinOrderByAggregateInputObjectZodSchema = makeSchema();
