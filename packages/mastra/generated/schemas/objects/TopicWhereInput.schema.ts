import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { AssistantNullableScalarRelationFilterObjectSchema as AssistantNullableScalarRelationFilterObjectSchema } from './AssistantNullableScalarRelationFilter.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema';
import { AgentNullableScalarRelationFilterObjectSchema as AgentNullableScalarRelationFilterObjectSchema } from './AgentNullableScalarRelationFilter.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './AgentWhereInput.schema';
import { ModelNullableScalarRelationFilterObjectSchema as ModelNullableScalarRelationFilterObjectSchema } from './ModelNullableScalarRelationFilter.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { TopicKnowledgeBaseListRelationFilterObjectSchema as TopicKnowledgeBaseListRelationFilterObjectSchema } from './TopicKnowledgeBaseListRelationFilter.schema'

const topicwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TopicWhereInputObjectSchema), z.lazy(() => TopicWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TopicWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopicWhereInputObjectSchema), z.lazy(() => TopicWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  prompt: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  pinned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isNameManuallyEdited: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  assistantId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  agentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  modelId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  assistant: z.union([z.lazy(() => AssistantNullableScalarRelationFilterObjectSchema), z.lazy(() => AssistantWhereInputObjectSchema)]).optional(),
  agent: z.union([z.lazy(() => AgentNullableScalarRelationFilterObjectSchema), z.lazy(() => AgentWhereInputObjectSchema)]).optional(),
  model: z.union([z.lazy(() => ModelNullableScalarRelationFilterObjectSchema), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  knowledgeBases: z.lazy(() => TopicKnowledgeBaseListRelationFilterObjectSchema).optional()
}).strict();
export const TopicWhereInputObjectSchema: z.ZodType<Prisma.TopicWhereInput> = topicwhereinputSchema as unknown as z.ZodType<Prisma.TopicWhereInput>;
export const TopicWhereInputObjectZodSchema = topicwhereinputSchema;
