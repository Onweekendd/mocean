import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  order: SortOrderSchema.optional()
}).strict();
export const QuickPhraseAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.QuickPhraseAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.QuickPhraseAvgOrderByAggregateInput>;
export const QuickPhraseAvgOrderByAggregateInputObjectZodSchema = makeSchema();
