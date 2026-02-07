import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const AssistantOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AssistantOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantOrderByRelationAggregateInput>;
export const AssistantOrderByRelationAggregateInputObjectZodSchema = makeSchema();
