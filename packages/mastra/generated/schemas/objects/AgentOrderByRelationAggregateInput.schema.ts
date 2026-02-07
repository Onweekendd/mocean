import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AgentOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AgentOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentOrderByRelationAggregateInput>;
export const AgentOrderByRelationAggregateInputObjectZodSchema = makeSchema();
