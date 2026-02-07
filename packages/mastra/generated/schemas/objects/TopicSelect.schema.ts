import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantArgsObjectSchema as AssistantArgsObjectSchema } from './AssistantArgs.schema';
import { AgentArgsObjectSchema as AgentArgsObjectSchema } from './AgentArgs.schema';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema';
import { TopicKnowledgeBaseFindManySchema as TopicKnowledgeBaseFindManySchema } from '../findManyTopicKnowledgeBase.schema';
import { TopicCountOutputTypeArgsObjectSchema as TopicCountOutputTypeArgsObjectSchema } from './TopicCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  prompt: z.boolean().optional(),
  pinned: z.boolean().optional(),
  isNameManuallyEdited: z.boolean().optional(),
  assistant: z.union([z.boolean(), z.lazy(() => AssistantArgsObjectSchema)]).optional(),
  assistantId: z.boolean().optional(),
  agent: z.union([z.boolean(), z.lazy(() => AgentArgsObjectSchema)]).optional(),
  agentId: z.boolean().optional(),
  modelId: z.boolean().optional(),
  model: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  knowledgeBases: z.union([z.boolean(), z.lazy(() => TopicKnowledgeBaseFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => TopicCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TopicSelectObjectSchema: z.ZodType<Prisma.TopicSelect> = makeSchema() as unknown as z.ZodType<Prisma.TopicSelect>;
export const TopicSelectObjectZodSchema = makeSchema();
