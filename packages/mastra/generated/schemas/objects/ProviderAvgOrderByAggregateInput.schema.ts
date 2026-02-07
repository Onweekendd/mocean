import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  modelCount: SortOrderSchema.optional()
}).strict();
export const ProviderAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProviderAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderAvgOrderByAggregateInput>;
export const ProviderAvgOrderByAggregateInputObjectZodSchema = makeSchema();
