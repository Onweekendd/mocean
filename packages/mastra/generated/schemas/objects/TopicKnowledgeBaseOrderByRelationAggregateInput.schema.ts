import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const TopicKnowledgeBaseOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseOrderByRelationAggregateInput>;
export const TopicKnowledgeBaseOrderByRelationAggregateInputObjectZodSchema = makeSchema();
