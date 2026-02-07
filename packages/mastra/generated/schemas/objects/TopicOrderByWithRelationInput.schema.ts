import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AssistantOrderByWithRelationInputObjectSchema as AssistantOrderByWithRelationInputObjectSchema } from './AssistantOrderByWithRelationInput.schema';
import { AgentOrderByWithRelationInputObjectSchema as AgentOrderByWithRelationInputObjectSchema } from './AgentOrderByWithRelationInput.schema';
import { ModelOrderByWithRelationInputObjectSchema as ModelOrderByWithRelationInputObjectSchema } from './ModelOrderByWithRelationInput.schema';
import { TopicKnowledgeBaseOrderByRelationAggregateInputObjectSchema as TopicKnowledgeBaseOrderByRelationAggregateInputObjectSchema } from './TopicKnowledgeBaseOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  prompt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pinned: SortOrderSchema.optional(),
  isNameManuallyEdited: SortOrderSchema.optional(),
  assistantId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  agentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  modelId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  assistant: z.lazy(() => AssistantOrderByWithRelationInputObjectSchema).optional(),
  agent: z.lazy(() => AgentOrderByWithRelationInputObjectSchema).optional(),
  model: z.lazy(() => ModelOrderByWithRelationInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => TopicKnowledgeBaseOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TopicOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TopicOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicOrderByWithRelationInput>;
export const TopicOrderByWithRelationInputObjectZodSchema = makeSchema();
