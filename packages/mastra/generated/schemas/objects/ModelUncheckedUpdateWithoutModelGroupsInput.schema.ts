import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { AssistantUncheckedUpdateManyWithoutModelNestedInputObjectSchema as AssistantUncheckedUpdateManyWithoutModelNestedInputObjectSchema } from './AssistantUncheckedUpdateManyWithoutModelNestedInput.schema';
import { AssistantUncheckedUpdateManyWithoutDefaultModelNestedInputObjectSchema as AssistantUncheckedUpdateManyWithoutDefaultModelNestedInputObjectSchema } from './AssistantUncheckedUpdateManyWithoutDefaultModelNestedInput.schema';
import { KnowledgeBaseUncheckedUpdateManyWithoutModelNestedInputObjectSchema as KnowledgeBaseUncheckedUpdateManyWithoutModelNestedInputObjectSchema } from './KnowledgeBaseUncheckedUpdateManyWithoutModelNestedInput.schema';
import { AssistantSettingsUncheckedUpdateManyWithoutDefaultModelNestedInputObjectSchema as AssistantSettingsUncheckedUpdateManyWithoutDefaultModelNestedInputObjectSchema } from './AssistantSettingsUncheckedUpdateManyWithoutDefaultModelNestedInput.schema';
import { KnowledgeBaseUncheckedUpdateManyWithoutRerankModelNestedInputObjectSchema as KnowledgeBaseUncheckedUpdateManyWithoutRerankModelNestedInputObjectSchema } from './KnowledgeBaseUncheckedUpdateManyWithoutRerankModelNestedInput.schema';
import { TopicUncheckedUpdateManyWithoutModelNestedInputObjectSchema as TopicUncheckedUpdateManyWithoutModelNestedInputObjectSchema } from './TopicUncheckedUpdateManyWithoutModelNestedInput.schema';
import { ModelProviderUncheckedUpdateManyWithoutModelNestedInputObjectSchema as ModelProviderUncheckedUpdateManyWithoutModelNestedInputObjectSchema } from './ModelProviderUncheckedUpdateManyWithoutModelNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  owned_by: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isSystem: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  contextLength: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  supportsAttachments: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  supportsTools: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  supportsReasoning: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  supportsImage: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  supportsAudio: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  supportsVideo: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  supportsEmbedding: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  inputPricePerMillion: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  outputPricePerMillion: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  assistants: z.lazy(() => AssistantUncheckedUpdateManyWithoutModelNestedInputObjectSchema).optional(),
  defaultForAssistants: z.lazy(() => AssistantUncheckedUpdateManyWithoutDefaultModelNestedInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseUncheckedUpdateManyWithoutModelNestedInputObjectSchema).optional(),
  assistantSettings: z.lazy(() => AssistantSettingsUncheckedUpdateManyWithoutDefaultModelNestedInputObjectSchema).optional(),
  rerankFor: z.lazy(() => KnowledgeBaseUncheckedUpdateManyWithoutRerankModelNestedInputObjectSchema).optional(),
  Topic: z.lazy(() => TopicUncheckedUpdateManyWithoutModelNestedInputObjectSchema).optional(),
  providers: z.lazy(() => ModelProviderUncheckedUpdateManyWithoutModelNestedInputObjectSchema).optional()
}).strict();
export const ModelUncheckedUpdateWithoutModelGroupsInputObjectSchema: z.ZodType<Prisma.ModelUncheckedUpdateWithoutModelGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUncheckedUpdateWithoutModelGroupsInput>;
export const ModelUncheckedUpdateWithoutModelGroupsInputObjectZodSchema = makeSchema();
