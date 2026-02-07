import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  dimensions: z.number().int(),
  description: z.string().optional().nullable(),
  documentCount: z.number().int().optional().nullable(),
  chunkSize: z.number().int().optional().nullable(),
  chunkOverlap: z.number().int().optional().nullable(),
  threshold: z.number().optional().nullable(),
  version: z.number().int(),
  modelId: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const KnowledgeBaseCreateManyRerankModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateManyRerankModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateManyRerankModelInput>;
export const KnowledgeBaseCreateManyRerankModelInputObjectZodSchema = makeSchema();
