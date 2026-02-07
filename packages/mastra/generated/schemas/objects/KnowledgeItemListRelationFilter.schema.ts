import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeItemWhereInputObjectSchema as KnowledgeItemWhereInputObjectSchema } from './KnowledgeItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => KnowledgeItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => KnowledgeItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => KnowledgeItemWhereInputObjectSchema).optional()
}).strict();
export const KnowledgeItemListRelationFilterObjectSchema: z.ZodType<Prisma.KnowledgeItemListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemListRelationFilter>;
export const KnowledgeItemListRelationFilterObjectZodSchema = makeSchema();
