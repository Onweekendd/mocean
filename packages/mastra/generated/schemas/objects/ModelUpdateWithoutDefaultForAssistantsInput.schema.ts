import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { ModelGroupUpdateManyWithoutModelNestedInputObjectSchema as ModelGroupUpdateManyWithoutModelNestedInputObjectSchema } from './ModelGroupUpdateManyWithoutModelNestedInput.schema';
import { AssistantUpdateManyWithoutModelNestedInputObjectSchema as AssistantUpdateManyWithoutModelNestedInputObjectSchema } from './AssistantUpdateManyWithoutModelNestedInput.schema';
import { KnowledgeBaseUpdateManyWithoutModelNestedInputObjectSchema as KnowledgeBaseUpdateManyWithoutModelNestedInputObjectSchema } from './KnowledgeBaseUpdateManyWithoutModelNestedInput.schema';
import { AssistantSettingsUpdateManyWithoutDefaultModelNestedInputObjectSchema as AssistantSettingsUpdateManyWithoutDefaultModelNestedInputObjectSchema } from './AssistantSettingsUpdateManyWithoutDefaultModelNestedInput.schema';
import { KnowledgeBaseUpdateManyWithoutRerankModelNestedInputObjectSchema as KnowledgeBaseUpdateManyWithoutRerankModelNestedInputObjectSchema } from './KnowledgeBaseUpdateManyWithoutRerankModelNestedInput.schema';
import { TopicUpdateManyWithoutModelNestedInputObjectSchema as TopicUpdateManyWithoutModelNestedInputObjectSchema } from './TopicUpdateManyWithoutModelNestedInput.schema';
import { ModelProviderUpdateManyWithoutModelNestedInputObjectSchema as ModelProviderUpdateManyWithoutModelNestedInputObjectSchema } from './ModelProviderUpdateManyWithoutModelNestedInput.schema'

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
  modelGroups: z.lazy(() => ModelGroupUpdateManyWithoutModelNestedInputObjectSchema).optional(),
  assistants: z.lazy(() => AssistantUpdateManyWithoutModelNestedInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseUpdateManyWithoutModelNestedInputObjectSchema).optional(),
  assistantSettings: z.lazy(() => AssistantSettingsUpdateManyWithoutDefaultModelNestedInputObjectSchema).optional(),
  rerankFor: z.lazy(() => KnowledgeBaseUpdateManyWithoutRerankModelNestedInputObjectSchema).optional(),
  Topic: z.lazy(() => TopicUpdateManyWithoutModelNestedInputObjectSchema).optional(),
  providers: z.lazy(() => ModelProviderUpdateManyWithoutModelNestedInputObjectSchema).optional()
}).strict();
export const ModelUpdateWithoutDefaultForAssistantsInputObjectSchema: z.ZodType<Prisma.ModelUpdateWithoutDefaultForAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateWithoutDefaultForAssistantsInput>;
export const ModelUpdateWithoutDefaultForAssistantsInputObjectZodSchema = makeSchema();
