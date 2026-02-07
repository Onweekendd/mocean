import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ModelGroupOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ModelGroupOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupOrderByRelationAggregateInput>;
export const ModelGroupOrderByRelationAggregateInputObjectZodSchema = makeSchema();
