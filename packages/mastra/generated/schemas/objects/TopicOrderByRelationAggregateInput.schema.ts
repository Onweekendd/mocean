import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TopicOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TopicOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicOrderByRelationAggregateInput>;
export const TopicOrderByRelationAggregateInputObjectZodSchema = makeSchema();
