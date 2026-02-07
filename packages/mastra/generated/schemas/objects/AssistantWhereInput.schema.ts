import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumKnowledgeRecognitionNullableFilterObjectSchema as EnumKnowledgeRecognitionNullableFilterObjectSchema } from './EnumKnowledgeRecognitionNullableFilter.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ModelNullableScalarRelationFilterObjectSchema as ModelNullableScalarRelationFilterObjectSchema } from './ModelNullableScalarRelationFilter.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ProviderNullableScalarRelationFilterObjectSchema as ProviderNullableScalarRelationFilterObjectSchema } from './ProviderNullableScalarRelationFilter.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema';
import { AssistantSettingsNullableScalarRelationFilterObjectSchema as AssistantSettingsNullableScalarRelationFilterObjectSchema } from './AssistantSettingsNullableScalarRelationFilter.schema';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './AssistantSettingsWhereInput.schema';
import { TopicListRelationFilterObjectSchema as TopicListRelationFilterObjectSchema } from './TopicListRelationFilter.schema';
import { KnowledgeBaseListRelationFilterObjectSchema as KnowledgeBaseListRelationFilterObjectSchema } from './KnowledgeBaseListRelationFilter.schema';
import { MCPAssistantServerListRelationFilterObjectSchema as MCPAssistantServerListRelationFilterObjectSchema } from './MCPAssistantServerListRelationFilter.schema'

const assistantwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AssistantWhereInputObjectSchema), z.lazy(() => AssistantWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AssistantWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AssistantWhereInputObjectSchema), z.lazy(() => AssistantWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  prompt: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emoji: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  enableWebSearch: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  webSearchProviderId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  enableGenerateImage: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  knowledgeRecognition: z.union([z.lazy(() => EnumKnowledgeRecognitionNullableFilterObjectSchema), KnowledgeRecognitionSchema]).optional().nullable(),
  modelId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  providerId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  defaultModelId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  model: z.union([z.lazy(() => ModelNullableScalarRelationFilterObjectSchema), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  provider: z.union([z.lazy(() => ProviderNullableScalarRelationFilterObjectSchema), z.lazy(() => ProviderWhereInputObjectSchema)]).optional(),
  defaultModel: z.union([z.lazy(() => ModelNullableScalarRelationFilterObjectSchema), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  settings: z.union([z.lazy(() => AssistantSettingsNullableScalarRelationFilterObjectSchema), z.lazy(() => AssistantSettingsWhereInputObjectSchema)]).optional(),
  topics: z.lazy(() => TopicListRelationFilterObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseListRelationFilterObjectSchema).optional(),
  mcpServers: z.lazy(() => MCPAssistantServerListRelationFilterObjectSchema).optional()
}).strict();
export const AssistantWhereInputObjectSchema: z.ZodType<Prisma.AssistantWhereInput> = assistantwhereinputSchema as unknown as z.ZodType<Prisma.AssistantWhereInput>;
export const AssistantWhereInputObjectZodSchema = assistantwhereinputSchema;
