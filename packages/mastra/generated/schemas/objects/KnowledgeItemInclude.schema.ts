import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseArgsObjectSchema as KnowledgeBaseArgsObjectSchema } from './KnowledgeBaseArgs.schema'

const makeSchema = () => z.object({
  knowledgeBase: z.union([z.boolean(), z.lazy(() => KnowledgeBaseArgsObjectSchema)]).optional()
}).strict();
export const KnowledgeItemIncludeObjectSchema: z.ZodType<Prisma.KnowledgeItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeItemInclude>;
export const KnowledgeItemIncludeObjectZodSchema = makeSchema();
