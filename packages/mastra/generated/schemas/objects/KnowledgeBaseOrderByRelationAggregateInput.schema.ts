import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const KnowledgeBaseOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseOrderByRelationAggregateInput>;
export const KnowledgeBaseOrderByRelationAggregateInputObjectZodSchema = makeSchema();
