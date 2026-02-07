import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseSelectObjectSchema as KnowledgeBaseSelectObjectSchema } from './KnowledgeBaseSelect.schema';
import { KnowledgeBaseIncludeObjectSchema as KnowledgeBaseIncludeObjectSchema } from './KnowledgeBaseInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => KnowledgeBaseSelectObjectSchema).optional(),
  include: z.lazy(() => KnowledgeBaseIncludeObjectSchema).optional()
}).strict();
export const KnowledgeBaseArgsObjectSchema = makeSchema();
export const KnowledgeBaseArgsObjectZodSchema = makeSchema();
