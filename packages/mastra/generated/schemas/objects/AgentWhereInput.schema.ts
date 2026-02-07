import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumKnowledgeRecognitionNullableFilterObjectSchema as EnumKnowledgeRecognitionNullableFilterObjectSchema } from './EnumKnowledgeRecognitionNullableFilter.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AssistantSettingsNullableScalarRelationFilterObjectSchema as AssistantSettingsNullableScalarRelationFilterObjectSchema } from './AssistantSettingsNullableScalarRelationFilter.schema';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './AssistantSettingsWhereInput.schema';
import { TopicListRelationFilterObjectSchema as TopicListRelationFilterObjectSchema } from './TopicListRelationFilter.schema';
import { KnowledgeBaseListRelationFilterObjectSchema as KnowledgeBaseListRelationFilterObjectSchema } from './KnowledgeBaseListRelationFilter.schema';
import { MCPAgentServerListRelationFilterObjectSchema as MCPAgentServerListRelationFilterObjectSchema } from './MCPAgentServerListRelationFilter.schema'

const agentwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AgentWhereInputObjectSchema), z.lazy(() => AgentWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgentWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgentWhereInputObjectSchema), z.lazy(() => AgentWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  prompt: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emoji: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  groupJson: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  enableWebSearch: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  webSearchProviderId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  enableGenerateImage: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  knowledgeRecognition: z.union([z.lazy(() => EnumKnowledgeRecognitionNullableFilterObjectSchema), KnowledgeRecognitionSchema]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  settings: z.union([z.lazy(() => AssistantSettingsNullableScalarRelationFilterObjectSchema), z.lazy(() => AssistantSettingsWhereInputObjectSchema)]).optional(),
  topics: z.lazy(() => TopicListRelationFilterObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseListRelationFilterObjectSchema).optional(),
  mcpServers: z.lazy(() => MCPAgentServerListRelationFilterObjectSchema).optional()
}).strict();
export const AgentWhereInputObjectSchema: z.ZodType<Prisma.AgentWhereInput> = agentwhereinputSchema as unknown as z.ZodType<Prisma.AgentWhereInput>;
export const AgentWhereInputObjectZodSchema = agentwhereinputSchema;
