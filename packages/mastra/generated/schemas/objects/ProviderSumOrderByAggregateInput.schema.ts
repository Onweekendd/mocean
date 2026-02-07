import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  modelCount: SortOrderSchema.optional()
}).strict();
export const ProviderSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProviderSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderSumOrderByAggregateInput>;
export const ProviderSumOrderByAggregateInputObjectZodSchema = makeSchema();
