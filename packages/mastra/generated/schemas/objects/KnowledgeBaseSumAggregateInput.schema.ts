import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  dimensions: z.literal(true).optional(),
  documentCount: z.literal(true).optional(),
  chunkSize: z.literal(true).optional(),
  chunkOverlap: z.literal(true).optional(),
  threshold: z.literal(true).optional(),
  version: z.literal(true).optional()
}).strict();
export const KnowledgeBaseSumAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseSumAggregateInputType>;
export const KnowledgeBaseSumAggregateInputObjectZodSchema = makeSchema();
