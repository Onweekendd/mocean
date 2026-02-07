import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  processingProgress: z.literal(true).optional(),
  retryCount: z.literal(true).optional()
}).strict();
export const KnowledgeItemAvgAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeItemAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemAvgAggregateInputType>;
export const KnowledgeItemAvgAggregateInputObjectZodSchema = makeSchema();
