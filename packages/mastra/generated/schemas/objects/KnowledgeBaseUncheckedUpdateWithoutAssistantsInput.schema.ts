import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AgentUncheckedUpdateManyWithoutKnowledgeBasesNestedInputObjectSchema as AgentUncheckedUpdateManyWithoutKnowledgeBasesNestedInputObjectSchema } from './AgentUncheckedUpdateManyWithoutKnowledgeBasesNestedInput.schema';
import { KnowledgeItemUncheckedUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema as KnowledgeItemUncheckedUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema } from './KnowledgeItemUncheckedUpdateManyWithoutKnowledgeBaseNestedInput.schema';
import { TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema as TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema } from './TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dimensions: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  documentCount: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  chunkSize: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  chunkOverlap: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  threshold: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  version: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  modelId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  rerankModelId: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  agents: z.lazy(() => AgentUncheckedUpdateManyWithoutKnowledgeBasesNestedInputObjectSchema).optional(),
  items: z.lazy(() => KnowledgeItemUncheckedUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema).optional(),
  topics: z.lazy(() => TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseUncheckedUpdateWithoutAssistantsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUncheckedUpdateWithoutAssistantsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUncheckedUpdateWithoutAssistantsInput>;
export const KnowledgeBaseUncheckedUpdateWithoutAssistantsInputObjectZodSchema = makeSchema();
