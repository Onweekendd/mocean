import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { NullableEnumKnowledgeRecognitionFieldUpdateOperationsInputObjectSchema as NullableEnumKnowledgeRecognitionFieldUpdateOperationsInputObjectSchema } from './NullableEnumKnowledgeRecognitionFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ModelUpdateOneWithoutAssistantsNestedInputObjectSchema as ModelUpdateOneWithoutAssistantsNestedInputObjectSchema } from './ModelUpdateOneWithoutAssistantsNestedInput.schema';
import { ProviderUpdateOneWithoutAssistantNestedInputObjectSchema as ProviderUpdateOneWithoutAssistantNestedInputObjectSchema } from './ProviderUpdateOneWithoutAssistantNestedInput.schema';
import { ModelUpdateOneWithoutDefaultForAssistantsNestedInputObjectSchema as ModelUpdateOneWithoutDefaultForAssistantsNestedInputObjectSchema } from './ModelUpdateOneWithoutDefaultForAssistantsNestedInput.schema';
import { AssistantSettingsUpdateOneWithoutAssistantNestedInputObjectSchema as AssistantSettingsUpdateOneWithoutAssistantNestedInputObjectSchema } from './AssistantSettingsUpdateOneWithoutAssistantNestedInput.schema';
import { TopicUpdateManyWithoutAssistantNestedInputObjectSchema as TopicUpdateManyWithoutAssistantNestedInputObjectSchema } from './TopicUpdateManyWithoutAssistantNestedInput.schema';
import { MCPAssistantServerUpdateManyWithoutAssistantNestedInputObjectSchema as MCPAssistantServerUpdateManyWithoutAssistantNestedInputObjectSchema } from './MCPAssistantServerUpdateManyWithoutAssistantNestedInput.schema'

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
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  model: z.lazy(() => ModelUpdateOneWithoutAssistantsNestedInputObjectSchema).optional(),
  provider: z.lazy(() => ProviderUpdateOneWithoutAssistantNestedInputObjectSchema).optional(),
  defaultModel: z.lazy(() => ModelUpdateOneWithoutDefaultForAssistantsNestedInputObjectSchema).optional(),
  settings: z.lazy(() => AssistantSettingsUpdateOneWithoutAssistantNestedInputObjectSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutAssistantNestedInputObjectSchema).optional(),
  mcpServers: z.lazy(() => MCPAssistantServerUpdateManyWithoutAssistantNestedInputObjectSchema).optional()
}).strict();
export const AssistantUpdateWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.AssistantUpdateWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateWithoutKnowledgeBasesInput>;
export const AssistantUpdateWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
