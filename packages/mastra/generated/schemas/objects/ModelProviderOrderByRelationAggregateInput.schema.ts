import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ModelProviderOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ModelProviderOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderOrderByRelationAggregateInput>;
export const ModelProviderOrderByRelationAggregateInputObjectZodSchema = makeSchema();
