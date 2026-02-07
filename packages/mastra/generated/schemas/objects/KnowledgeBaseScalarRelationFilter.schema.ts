import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './KnowledgeBaseWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => KnowledgeBaseWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => KnowledgeBaseWhereInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseScalarRelationFilterObjectSchema: z.ZodType<Prisma.KnowledgeBaseScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseScalarRelationFilter>;
export const KnowledgeBaseScalarRelationFilterObjectZodSchema = makeSchema();
