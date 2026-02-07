import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCountOutputTypeSelectObjectSchema as KnowledgeBaseCountOutputTypeSelectObjectSchema } from './KnowledgeBaseCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => KnowledgeBaseCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const KnowledgeBaseCountOutputTypeArgsObjectSchema = makeSchema();
export const KnowledgeBaseCountOutputTypeArgsObjectZodSchema = makeSchema();
