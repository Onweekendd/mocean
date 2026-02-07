import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { ModelGroupListRelationFilterObjectSchema as ModelGroupListRelationFilterObjectSchema } from './ModelGroupListRelationFilter.schema';
import { AssistantListRelationFilterObjectSchema as AssistantListRelationFilterObjectSchema } from './AssistantListRelationFilter.schema';
import { KnowledgeBaseListRelationFilterObjectSchema as KnowledgeBaseListRelationFilterObjectSchema } from './KnowledgeBaseListRelationFilter.schema';
import { AssistantSettingsListRelationFilterObjectSchema as AssistantSettingsListRelationFilterObjectSchema } from './AssistantSettingsListRelationFilter.schema';
import { TopicListRelationFilterObjectSchema as TopicListRelationFilterObjectSchema } from './TopicListRelationFilter.schema';
import { ModelProviderListRelationFilterObjectSchema as ModelProviderListRelationFilterObjectSchema } from './ModelProviderListRelationFilter.schema'

const modelwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelWhereInputObjectSchema), z.lazy(() => ModelWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelWhereInputObjectSchema), z.lazy(() => ModelWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  owned_by: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isSystem: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  contextLength: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  supportsAttachments: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  supportsTools: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  supportsReasoning: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  supportsImage: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  supportsAudio: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  supportsVideo: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  supportsEmbedding: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  inputPricePerMillion: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  outputPricePerMillion: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  modelGroups: z.lazy(() => ModelGroupListRelationFilterObjectSchema).optional(),
  assistants: z.lazy(() => AssistantListRelationFilterObjectSchema).optional(),
  defaultForAssistants: z.lazy(() => AssistantListRelationFilterObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseListRelationFilterObjectSchema).optional(),
  assistantSettings: z.lazy(() => AssistantSettingsListRelationFilterObjectSchema).optional(),
  rerankFor: z.lazy(() => KnowledgeBaseListRelationFilterObjectSchema).optional(),
  Topic: z.lazy(() => TopicListRelationFilterObjectSchema).optional(),
  providers: z.lazy(() => ModelProviderListRelationFilterObjectSchema).optional()
}).strict();
export const ModelWhereInputObjectSchema: z.ZodType<Prisma.ModelWhereInput> = modelwhereinputSchema as unknown as z.ZodType<Prisma.ModelWhereInput>;
export const ModelWhereInputObjectZodSchema = modelwhereinputSchema;
