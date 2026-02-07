import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicArgsObjectSchema as TopicArgsObjectSchema } from './TopicArgs.schema';
import { KnowledgeBaseArgsObjectSchema as KnowledgeBaseArgsObjectSchema } from './KnowledgeBaseArgs.schema'

const makeSchema = () => z.object({
  topic: z.union([z.boolean(), z.lazy(() => TopicArgsObjectSchema)]).optional(),
  topicId: z.boolean().optional(),
  knowledgeBase: z.union([z.boolean(), z.lazy(() => KnowledgeBaseArgsObjectSchema)]).optional(),
  knowledgeBaseId: z.boolean().optional()
}).strict();
export const TopicKnowledgeBaseSelectObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseSelect> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseSelect>;
export const TopicKnowledgeBaseSelectObjectZodSchema = makeSchema();
