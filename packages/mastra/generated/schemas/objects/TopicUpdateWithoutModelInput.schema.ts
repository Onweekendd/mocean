import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AssistantUpdateOneWithoutTopicsNestedInputObjectSchema as AssistantUpdateOneWithoutTopicsNestedInputObjectSchema } from './AssistantUpdateOneWithoutTopicsNestedInput.schema';
import { AgentUpdateOneWithoutTopicsNestedInputObjectSchema as AgentUpdateOneWithoutTopicsNestedInputObjectSchema } from './AgentUpdateOneWithoutTopicsNestedInput.schema';
import { TopicKnowledgeBaseUpdateManyWithoutTopicNestedInputObjectSchema as TopicKnowledgeBaseUpdateManyWithoutTopicNestedInputObjectSchema } from './TopicKnowledgeBaseUpdateManyWithoutTopicNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  prompt: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  pinned: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isNameManuallyEdited: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  assistant: z.lazy(() => AssistantUpdateOneWithoutTopicsNestedInputObjectSchema).optional(),
  agent: z.lazy(() => AgentUpdateOneWithoutTopicsNestedInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => TopicKnowledgeBaseUpdateManyWithoutTopicNestedInputObjectSchema).optional()
}).strict();
export const TopicUpdateWithoutModelInputObjectSchema: z.ZodType<Prisma.TopicUpdateWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpdateWithoutModelInput>;
export const TopicUpdateWithoutModelInputObjectZodSchema = makeSchema();
