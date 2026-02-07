import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ModelOrderByWithRelationInputObjectSchema as ModelOrderByWithRelationInputObjectSchema } from './ModelOrderByWithRelationInput.schema';
import { ProviderOrderByWithRelationInputObjectSchema as ProviderOrderByWithRelationInputObjectSchema } from './ProviderOrderByWithRelationInput.schema';
import { AssistantSettingsOrderByWithRelationInputObjectSchema as AssistantSettingsOrderByWithRelationInputObjectSchema } from './AssistantSettingsOrderByWithRelationInput.schema';
import { TopicOrderByRelationAggregateInputObjectSchema as TopicOrderByRelationAggregateInputObjectSchema } from './TopicOrderByRelationAggregateInput.schema';
import { KnowledgeBaseOrderByRelationAggregateInputObjectSchema as KnowledgeBaseOrderByRelationAggregateInputObjectSchema } from './KnowledgeBaseOrderByRelationAggregateInput.schema';
import { MCPAssistantServerOrderByRelationAggregateInputObjectSchema as MCPAssistantServerOrderByRelationAggregateInputObjectSchema } from './MCPAssistantServerOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  prompt: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  emoji: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  enableWebSearch: SortOrderSchema.optional(),
  webSearchProviderId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  enableGenerateImage: SortOrderSchema.optional(),
  knowledgeRecognition: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  modelId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  providerId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  defaultModelId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  model: z.lazy(() => ModelOrderByWithRelationInputObjectSchema).optional(),
  provider: z.lazy(() => ProviderOrderByWithRelationInputObjectSchema).optional(),
  defaultModel: z.lazy(() => ModelOrderByWithRelationInputObjectSchema).optional(),
  settings: z.lazy(() => AssistantSettingsOrderByWithRelationInputObjectSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseOrderByRelationAggregateInputObjectSchema).optional(),
  mcpServers: z.lazy(() => MCPAssistantServerOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const AssistantOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AssistantOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantOrderByWithRelationInput>;
export const AssistantOrderByWithRelationInputObjectZodSchema = makeSchema();
