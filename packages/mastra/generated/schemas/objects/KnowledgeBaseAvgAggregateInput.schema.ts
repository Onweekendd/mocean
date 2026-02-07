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
export const KnowledgeBaseAvgAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseAvgAggregateInputType>;
export const KnowledgeBaseAvgAggregateInputObjectZodSchema = makeSchema();
