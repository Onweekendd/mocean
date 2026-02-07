import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './KnowledgeBaseWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => KnowledgeBaseWhereInputObjectSchema).optional(),
  some: z.lazy(() => KnowledgeBaseWhereInputObjectSchema).optional(),
  none: z.lazy(() => KnowledgeBaseWhereInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseListRelationFilterObjectSchema: z.ZodType<Prisma.KnowledgeBaseListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseListRelationFilter>;
export const KnowledgeBaseListRelationFilterObjectZodSchema = makeSchema();
