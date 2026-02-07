import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  contextLength: SortOrderSchema.optional(),
  inputPricePerMillion: SortOrderSchema.optional(),
  outputPricePerMillion: SortOrderSchema.optional()
}).strict();
export const ModelAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ModelAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelAvgOrderByAggregateInput>;
export const ModelAvgOrderByAggregateInputObjectZodSchema = makeSchema();
