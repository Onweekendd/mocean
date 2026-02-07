import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ModelGroupOrderByRelationAggregateInputObjectSchema as ModelGroupOrderByRelationAggregateInputObjectSchema } from './ModelGroupOrderByRelationAggregateInput.schema';
import { AssistantOrderByRelationAggregateInputObjectSchema as AssistantOrderByRelationAggregateInputObjectSchema } from './AssistantOrderByRelationAggregateInput.schema';
import { KnowledgeBaseOrderByRelationAggregateInputObjectSchema as KnowledgeBaseOrderByRelationAggregateInputObjectSchema } from './KnowledgeBaseOrderByRelationAggregateInput.schema';
import { AssistantSettingsOrderByRelationAggregateInputObjectSchema as AssistantSettingsOrderByRelationAggregateInputObjectSchema } from './AssistantSettingsOrderByRelationAggregateInput.schema';
import { TopicOrderByRelationAggregateInputObjectSchema as TopicOrderByRelationAggregateInputObjectSchema } from './TopicOrderByRelationAggregateInput.schema';
import { ModelProviderOrderByRelationAggregateInputObjectSchema as ModelProviderOrderByRelationAggregateInputObjectSchema } from './ModelProviderOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  owned_by: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isSystem: SortOrderSchema.optional(),
  contextLength: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  supportsAttachments: SortOrderSchema.optional(),
  supportsTools: SortOrderSchema.optional(),
  supportsReasoning: SortOrderSchema.optional(),
  supportsImage: SortOrderSchema.optional(),
  supportsAudio: SortOrderSchema.optional(),
  supportsVideo: SortOrderSchema.optional(),
  supportsEmbedding: SortOrderSchema.optional(),
  inputPricePerMillion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  outputPricePerMillion: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  modelGroups: z.lazy(() => ModelGroupOrderByRelationAggregateInputObjectSchema).optional(),
  assistants: z.lazy(() => AssistantOrderByRelationAggregateInputObjectSchema).optional(),
  defaultForAssistants: z.lazy(() => AssistantOrderByRelationAggregateInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseOrderByRelationAggregateInputObjectSchema).optional(),
  assistantSettings: z.lazy(() => AssistantSettingsOrderByRelationAggregateInputObjectSchema).optional(),
  rerankFor: z.lazy(() => KnowledgeBaseOrderByRelationAggregateInputObjectSchema).optional(),
  Topic: z.lazy(() => TopicOrderByRelationAggregateInputObjectSchema).optional(),
  providers: z.lazy(() => ModelProviderOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ModelOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ModelOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelOrderByWithRelationInput>;
export const ModelOrderByWithRelationInputObjectZodSchema = makeSchema();
