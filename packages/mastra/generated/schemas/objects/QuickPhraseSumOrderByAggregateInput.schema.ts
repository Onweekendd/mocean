import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  order: SortOrderSchema.optional()
}).strict();
export const QuickPhraseSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuickPhraseSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseSumOrderByAggregateInput>;
export const QuickPhraseSumOrderByAggregateInputObjectZodSchema = makeSchema();
