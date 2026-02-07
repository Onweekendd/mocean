import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AssistantOrderByRelationAggregateInputObjectSchema as AssistantOrderByRelationAggregateInputObjectSchema } from './AssistantOrderByRelationAggregateInput.schema';
import { AgentOrderByRelationAggregateInputObjectSchema as AgentOrderByRelationAggregateInputObjectSchema } from './AgentOrderByRelationAggregateInput.schema';
import { ModelOrderByWithRelationInputObjectSchema as ModelOrderByWithRelationInputObjectSchema } from './ModelOrderByWithRelationInput.schema';
import { KnowledgeItemOrderByRelationAggregateInputObjectSchema as KnowledgeItemOrderByRelationAggregateInputObjectSchema } from './KnowledgeItemOrderByRelationAggregateInput.schema';
import { TopicKnowledgeBaseOrderByRelationAggregateInputObjectSchema as TopicKnowledgeBaseOrderByRelationAggregateInputObjectSchema } from './TopicKnowledgeBaseOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  dimensions: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  documentCount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  chunkSize: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  chunkOverlap: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  threshold: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  version: SortOrderSchema.optional(),
  modelId: SortOrderSchema.optional(),
  rerankModelId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  assistants: z.lazy(() => AssistantOrderByRelationAggregateInputObjectSchema).optional(),
  agents: z.lazy(() => AgentOrderByRelationAggregateInputObjectSchema).optional(),
  model: z.lazy(() => ModelOrderByWithRelationInputObjectSchema).optional(),
  rerankModel: z.lazy(() => ModelOrderByWithRelationInputObjectSchema).optional(),
  items: z.lazy(() => KnowledgeItemOrderByRelationAggregateInputObjectSchema).optional(),
  topics: z.lazy(() => TopicKnowledgeBaseOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseOrderByWithRelationInput>;
export const KnowledgeBaseOrderByWithRelationInputObjectZodSchema = makeSchema();
