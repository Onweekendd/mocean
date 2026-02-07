import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  processingProgress: z.literal(true).optional(),
  retryCount: z.literal(true).optional()
}).strict();
export const KnowledgeItemSumAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeItemSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemSumAggregateInputType>;
export const KnowledgeItemSumAggregateInputObjectZodSchema = makeSchema();
