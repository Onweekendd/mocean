import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { NullableEnumKnowledgeRecognitionFieldUpdateOperationsInputObjectSchema as NullableEnumKnowledgeRecognitionFieldUpdateOperationsInputObjectSchema } from './NullableEnumKnowledgeRecognitionFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AssistantSettingsUncheckedUpdateOneWithoutAgentNestedInputObjectSchema as AssistantSettingsUncheckedUpdateOneWithoutAgentNestedInputObjectSchema } from './AssistantSettingsUncheckedUpdateOneWithoutAgentNestedInput.schema';
import { TopicUncheckedUpdateManyWithoutAgentNestedInputObjectSchema as TopicUncheckedUpdateManyWithoutAgentNestedInputObjectSchema } from './TopicUncheckedUpdateManyWithoutAgentNestedInput.schema';
import { KnowledgeBaseUncheckedUpdateManyWithoutAgentsNestedInputObjectSchema as KnowledgeBaseUncheckedUpdateManyWithoutAgentsNestedInputObjectSchema } from './KnowledgeBaseUncheckedUpdateManyWithoutAgentsNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  prompt: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  emoji: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  groupJson: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  enableWebSearch: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  webSearchProviderId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  enableGenerateImage: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  knowledgeRecognition: z.union([KnowledgeRecognitionSchema, z.lazy(() => NullableEnumKnowledgeRecognitionFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  settings: z.lazy(() => AssistantSettingsUncheckedUpdateOneWithoutAgentNestedInputObjectSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutAgentNestedInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => KnowledgeBaseUncheckedUpdateManyWithoutAgentsNestedInputObjectSchema).optional()
}).strict();
export const AgentUncheckedUpdateWithoutMcpServersInputObjectSchema: z.ZodType<Prisma.AgentUncheckedUpdateWithoutMcpServersInput> = makeSchema() as unknown as z.ZodType<Prisma.AgentUncheckedUpdateWithoutMcpServersInput>;
export const AgentUncheckedUpdateWithoutMcpServersInputObjectZodSchema = makeSchema();
