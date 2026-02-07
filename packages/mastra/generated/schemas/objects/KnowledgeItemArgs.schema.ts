import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeItemSelectObjectSchema as KnowledgeItemSelectObjectSchema } from './KnowledgeItemSelect.schema';
import { KnowledgeItemIncludeObjectSchema as KnowledgeItemIncludeObjectSchema } from './KnowledgeItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => KnowledgeItemSelectObjectSchema).optional(),
  include: z.lazy(() => KnowledgeItemIncludeObjectSchema).optional()
}).strict();
export const KnowledgeItemArgsObjectSchema = makeSchema();
export const KnowledgeItemArgsObjectZodSchema = makeSchema();
