import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { NullableEnumKnowledgeRecognitionFieldUpdateOperationsInputObjectSchema as NullableEnumKnowledgeRecognitionFieldUpdateOperationsInputObjectSchema } from './NullableEnumKnowledgeRecognitionFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AssistantSettingsUncheckedUpdateOneWithoutAssistantNestedInputObjectSchema as AssistantSettingsUncheckedUpdateOneWithoutAssistantNestedInputObjectSchema } from './AssistantSettingsUncheckedUpdateOneWithoutAssistantNestedInput.schema';
import { TopicUncheckedUpdateManyWithoutAssistantNestedInputObjectSchema as TopicUncheckedUpdateManyWithoutAssistantNestedInputObjectSchema } from './TopicUncheckedUpdateManyWithoutAssistantNestedInput.schema';
import { KnowledgeBaseUncheckedUpdateManyWithoutAssistantsNestedInputObjectSchema as KnowledgeBaseUncheckedUpdateManyWithoutAssistantsNestedInputObjectSchema } from './KnowledgeBaseUncheckedUpdateManyWithoutAssistantsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  prompt: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emoji: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  enableWebSearch: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  webSearchProviderId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  enableGenerateImage: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  knowledgeRecognition: z.union([KnowledgeRecognitionSchema, z.lazy(() => NullableEnumKnowledgeRecognitionFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  modelId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  providerId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  defaultModelId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  settings: z.lazy(() => AssistantSettingsUncheckedUpdateOneWithoutAssistantNestedInputObjectSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutAssistantNestedInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseUncheckedUpdateManyWithoutAssistantsNestedInputObjectSchema).optional()
}).strict();
export const AssistantUncheckedUpdateWithoutMcpServersInputObjectSchema: z.ZodType<Prisma.AssistantUncheckedUpdateWithoutMcpServersInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUncheckedUpdateWithoutMcpServersInput>;
export const AssistantUncheckedUpdateWithoutMcpServersInputObjectZodSchema = makeSchema();
