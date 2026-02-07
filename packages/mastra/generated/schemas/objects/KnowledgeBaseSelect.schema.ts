import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantFindManySchema as AssistantFindManySchema } from '../findManyAssistant.schema';
import { AgentFindManySchema as AgentFindManySchema } from '../findManyAgent.schema';
import { ModelArgsObjectSchema as ModelArgsObjectSchema } from './ModelArgs.schema';
import { KnowledgeItemFindManySchema as KnowledgeItemFindManySchema } from '../findManyKnowledgeItem.schema';
import { TopicKnowledgeBaseFindManySchema as TopicKnowledgeBaseFindManySchema } from '../findManyTopicKnowledgeBase.schema';
import { KnowledgeBaseCountOutputTypeArgsObjectSchema as KnowledgeBaseCountOutputTypeArgsObjectSchema } from './KnowledgeBaseCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  dimensions: z.boolean().optional(),
  description: z.boolean().optional(),
  documentCount: z.boolean().optional(),
  chunkSize: z.boolean().optional(),
  chunkOverlap: z.boolean().optional(),
  threshold: z.boolean().optional(),
  version: z.boolean().optional(),
  assistants: z.union([z.boolean(), z.lazy(() => AssistantFindManySchema)]).optional(),
  agents: z.union([z.boolean(), z.lazy(() => AgentFindManySchema)]).optional(),
  model: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  modelId: z.boolean().optional(),
  rerankModel: z.union([z.boolean(), z.lazy(() => ModelArgsObjectSchema)]).optional(),
  rerankModelId: z.boolean().optional(),
  items: z.union([z.boolean(), z.lazy(() => KnowledgeItemFindManySchema)]).optional(),
  topics: z.union([z.boolean(), z.lazy(() => TopicKnowledgeBaseFindManySchema)]).optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => KnowledgeBaseCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const KnowledgeBaseSelectObjectSchema: z.ZodType<Prisma.KnowledgeBaseSelect> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseSelect>;
export const KnowledgeBaseSelectObjectZodSchema = makeSchema();
