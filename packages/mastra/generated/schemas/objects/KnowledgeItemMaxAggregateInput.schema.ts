import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  uniqueId: z.literal(true).optional(),
  type: z.literal(true).optional(),
  remark: z.literal(true).optional(),
  processingStatus: z.literal(true).optional(),
  processingProgress: z.literal(true).optional(),
  processingError: z.literal(true).optional(),
  retryCount: z.literal(true).optional(),
  baseId: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const KnowledgeItemMaxAggregateInputObjectSchema: z.ZodType<Prisma.KnowledgeItemMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemMaxAggregateInputType>;
export const KnowledgeItemMaxAggregateInputObjectZodSchema = makeSchema();
