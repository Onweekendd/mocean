import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicArgsObjectSchema as TopicArgsObjectSchema } from './TopicArgs.schema';
import { KnowledgeBaseArgsObjectSchema as KnowledgeBaseArgsObjectSchema } from './KnowledgeBaseArgs.schema'

const makeSchema = () => z.object({
  topic: z.union([z.boolean(), z.lazy(() => TopicArgsObjectSchema)]).optional(),
  knowledgeBase: z.union([z.boolean(), z.lazy(() => KnowledgeBaseArgsObjectSchema)]).optional()
}).strict();
export const TopicKnowledgeBaseIncludeObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseInclude> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseInclude>;
export const TopicKnowledgeBaseIncludeObjectZodSchema = makeSchema();
