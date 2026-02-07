import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const GroupOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.GroupOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupOrderByRelationAggregateInput>;
export const GroupOrderByRelationAggregateInputObjectZodSchema = makeSchema();
