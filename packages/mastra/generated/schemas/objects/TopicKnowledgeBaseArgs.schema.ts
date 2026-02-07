import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseSelectObjectSchema as TopicKnowledgeBaseSelectObjectSchema } from './TopicKnowledgeBaseSelect.schema';
import { TopicKnowledgeBaseIncludeObjectSchema as TopicKnowledgeBaseIncludeObjectSchema } from './TopicKnowledgeBaseInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TopicKnowledgeBaseSelectObjectSchema).optional(),
  include: z.lazy(() => TopicKnowledgeBaseIncludeObjectSchema).optional()
}).strict();
export const TopicKnowledgeBaseArgsObjectSchema = makeSchema();
export const TopicKnowledgeBaseArgsObjectZodSchema = makeSchema();
