import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AssistantSettingsOrderByWithRelationInputObjectSchema as AssistantSettingsOrderByWithRelationInputObjectSchema } from './AssistantSettingsOrderByWithRelationInput.schema';
import { TopicOrderByRelationAggregateInputObjectSchema as TopicOrderByRelationAggregateInputObjectSchema } from './TopicOrderByRelationAggregateInput.schema';
import { KnowledgeBaseOrderByRelationAggregateInputObjectSchema as KnowledgeBaseOrderByRelationAggregateInputObjectSchema } from './KnowledgeBaseOrderByRelationAggregateInput.schema';
import { MCPAgentServerOrderByRelationAggregateInputObjectSchema as MCPAgentServerOrderByRelationAggregateInputObjectSchema } from './MCPAgentServerOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  prompt: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  emoji: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  groupJson: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  enableWebSearch: SortOrderSchema.optional(),
  webSearchProviderId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  enableGenerateImage: SortOrderSchema.optional(),
  knowledgeRecognition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  settings: z.lazy(() => AssistantSettingsOrderByWithRelationInputObjectSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseOrderByRelationAggregateInputObjectSchema).optional(),
  mcpServers: z.lazy(() => MCPAgentServerOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const AgentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AgentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentOrderByWithRelationInput>;
export const AgentOrderByWithRelationInputObjectZodSchema = makeSchema();
