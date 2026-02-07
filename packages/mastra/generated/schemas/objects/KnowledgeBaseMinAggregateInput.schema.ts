import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  dimensions: z.literal(true).optional(),
  description: z.literal(true).optional(),
  documentCount: z.literal(true).optional(),
  chunkSize: z.literal(true).optional(),
  chunkOverlap: z.literal(true).optional(),
  threshold: z.literal(true).optional(),
  version: z.literal(true).optional(),
  modelId: z.literal(true).optional(),
  rerankModelId: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const KnowledgeBaseMinAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseMinAggregateInputType>;
export const KnowledgeBaseMinAggregateInputObjectZodSchema = makeSchema();
