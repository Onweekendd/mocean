import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupCreateNestedManyWithoutModelInputObjectSchema as ModelGroupCreateNestedManyWithoutModelInputObjectSchema } from './ModelGroupCreateNestedManyWithoutModelInput.schema';
import { AssistantCreateNestedManyWithoutModelInputObjectSchema as AssistantCreateNestedManyWithoutModelInputObjectSchema } from './AssistantCreateNestedManyWithoutModelInput.schema';
import { AssistantCreateNestedManyWithoutDefaultModelInputObjectSchema as AssistantCreateNestedManyWithoutDefaultModelInputObjectSchema } from './AssistantCreateNestedManyWithoutDefaultModelInput.schema';
import { AssistantSettingsCreateNestedManyWithoutDefaultModelInputObjectSchema as AssistantSettingsCreateNestedManyWithoutDefaultModelInputObjectSchema } from './AssistantSettingsCreateNestedManyWithoutDefaultModelInput.schema';
import { KnowledgeBaseCreateNestedManyWithoutRerankModelInputObjectSchema as KnowledgeBaseCreateNestedManyWithoutRerankModelInputObjectSchema } from './KnowledgeBaseCreateNestedManyWithoutRerankModelInput.schema';
import { TopicCreateNestedManyWithoutModelInputObjectSchema as TopicCreateNestedManyWithoutModelInputObjectSchema } from './TopicCreateNestedManyWithoutModelInput.schema';
import { ModelProviderCreateNestedManyWithoutModelInputObjectSchema as ModelProviderCreateNestedManyWithoutModelInputObjectSchema } from './ModelProviderCreateNestedManyWithoutModelInput.schema'

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
  modelGroups: z.lazy(() => ModelGroupCreateNestedManyWithoutModelInputObjectSchema).optional(),
  assistants: z.lazy(() => AssistantCreateNestedManyWithoutModelInputObjectSchema).optional(),
  defaultForAssistants: z.lazy(() => AssistantCreateNestedManyWithoutDefaultModelInputObjectSchema).optional(),
  assistantSettings: z.lazy(() => AssistantSettingsCreateNestedManyWithoutDefaultModelInputObjectSchema).optional(),
  rerankFor: z.lazy(() => KnowledgeBaseCreateNestedManyWithoutRerankModelInputObjectSchema).optional(),
  Topic: z.lazy(() => TopicCreateNestedManyWithoutModelInputObjectSchema).optional(),
  providers: z.lazy(() => ModelProviderCreateNestedManyWithoutModelInputObjectSchema).optional()
}).strict();
export const ModelCreateWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.ModelCreateWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateWithoutKnowledgeBasesInput>;
export const ModelCreateWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
