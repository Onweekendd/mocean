import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupUncheckedCreateNestedManyWithoutModelInputObjectSchema as ModelGroupUncheckedCreateNestedManyWithoutModelInputObjectSchema } from './ModelGroupUncheckedCreateNestedManyWithoutModelInput.schema';
import { AssistantUncheckedCreateNestedManyWithoutModelInputObjectSchema as AssistantUncheckedCreateNestedManyWithoutModelInputObjectSchema } from './AssistantUncheckedCreateNestedManyWithoutModelInput.schema';
import { AssistantUncheckedCreateNestedManyWithoutDefaultModelInputObjectSchema as AssistantUncheckedCreateNestedManyWithoutDefaultModelInputObjectSchema } from './AssistantUncheckedCreateNestedManyWithoutDefaultModelInput.schema';
import { KnowledgeBaseUncheckedCreateNestedManyWithoutModelInputObjectSchema as KnowledgeBaseUncheckedCreateNestedManyWithoutModelInputObjectSchema } from './KnowledgeBaseUncheckedCreateNestedManyWithoutModelInput.schema';
import { AssistantSettingsUncheckedCreateNestedManyWithoutDefaultModelInputObjectSchema as AssistantSettingsUncheckedCreateNestedManyWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUncheckedCreateNestedManyWithoutDefaultModelInput.schema';
import { KnowledgeBaseUncheckedCreateNestedManyWithoutRerankModelInputObjectSchema as KnowledgeBaseUncheckedCreateNestedManyWithoutRerankModelInputObjectSchema } from './KnowledgeBaseUncheckedCreateNestedManyWithoutRerankModelInput.schema';
import { TopicUncheckedCreateNestedManyWithoutModelInputObjectSchema as TopicUncheckedCreateNestedManyWithoutModelInputObjectSchema } from './TopicUncheckedCreateNestedManyWithoutModelInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  owned_by: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  contextLength: z.number().int().optional().nullable(),
  supportsAttachments: z.boolean().optional(),
  supportsTools: z.boolean().optional(),
  supportsReasoning: z.boolean().optional(),
  supportsImage: z.boolean().optional(),
  supportsAudio: z.boolean().optional(),
  supportsVideo: z.boolean().optional(),
  supportsEmbedding: z.boolean().optional(),
  inputPricePerMillion: z.number().optional().nullable(),
  outputPricePerMillion: z.number().optional().nullable(),
  modelGroups: z.lazy(() => ModelGroupUncheckedCreateNestedManyWithoutModelInputObjectSchema).optional(),
  assistants: z.lazy(() => AssistantUncheckedCreateNestedManyWithoutModelInputObjectSchema).optional(),
  defaultForAssistants: z.lazy(() => AssistantUncheckedCreateNestedManyWithoutDefaultModelInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseUncheckedCreateNestedManyWithoutModelInputObjectSchema).optional(),
  assistantSettings: z.lazy(() => AssistantSettingsUncheckedCreateNestedManyWithoutDefaultModelInputObjectSchema).optional(),
  rerankFor: z.lazy(() => KnowledgeBaseUncheckedCreateNestedManyWithoutRerankModelInputObjectSchema).optional(),
  Topic: z.lazy(() => TopicUncheckedCreateNestedManyWithoutModelInputObjectSchema).optional()
}).strict();
export const ModelUncheckedCreateWithoutProvidersInputObjectSchema: z.ZodType<Prisma.ModelUncheckedCreateWithoutProvidersInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedCreateWithoutProvidersInput>;
export const ModelUncheckedCreateWithoutProvidersInputObjectZodSchema = makeSchema();
