import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantArgsObjectSchema as AssistantArgsObjectSchema } from './AssistantArgs.schema';
import { AgentArgsObjectSchema as AgentArgsObjectSchema } from './AgentArgs.schema';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema';
import { TopicKnowledgeBaseFindManySchema as TopicKnowledgeBaseFindManySchema } from '../findManyTopicKnowledgeBase.schema';
import { TopicCountOutputTypeArgsObjectSchema as TopicCountOutputTypeArgsObjectSchema } from './TopicCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  assistant: z.union([z.boolean(), z.lazy(() => AssistantArgsObjectSchema)]).optional(),
  agent: z.union([z.boolean(), z.lazy(() => AgentArgsObjectSchema)]).optional(),
  model: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  knowledgeBases: z.union([z.boolean(), z.lazy(() => TopicKnowledgeBaseFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TopicCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TopicIncludeObjectSchema: z.ZodType<Prisma.TopicInclude> = makeSchema() as unknown as z.ZodType<Prisma.TopicInclude>;
export const TopicIncludeObjectZodSchema = makeSchema();
