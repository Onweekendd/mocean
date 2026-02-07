import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { AssistantUpdateManyWithoutKnowledgeBasesNestedInputObjectSchema as AssistantUpdateManyWithoutKnowledgeBasesNestedInputObjectSchema } from './AssistantUpdateManyWithoutKnowledgeBasesNestedInput.schema';
import { ModelUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectSchema as ModelUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectSchema } from './ModelUpdateOneRequiredWithoutKnowledgeBasesNestedInput.schema';
import { ModelUpdateOneWithoutRerankForNestedInputObjectSchema as ModelUpdateOneWithoutRerankForNestedInputObjectSchema } from './ModelUpdateOneWithoutRerankForNestedInput.schema';
import { KnowledgeItemUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema as KnowledgeItemUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema } from './KnowledgeItemUpdateManyWithoutKnowledgeBaseNestedInput.schema';
import { TopicKnowledgeBaseUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema as TopicKnowledgeBaseUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema } from './TopicKnowledgeBaseUpdateManyWithoutKnowledgeBaseNestedInput.schema'

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
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  assistants: z.lazy(() => AssistantUpdateManyWithoutKnowledgeBasesNestedInputObjectSchema).optional(),
  model: z.lazy(() => ModelUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectSchema).optional(),
  rerankModel: z.lazy(() => ModelUpdateOneWithoutRerankForNestedInputObjectSchema).optional(),
  items: z.lazy(() => KnowledgeItemUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema).optional(),
  topics: z.lazy(() => TopicKnowledgeBaseUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseUpdateWithoutAgentsInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUpdateWithoutAgentsInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUpdateWithoutAgentsInput>;
export const KnowledgeBaseUpdateWithoutAgentsInputObjectZodSchema = makeSchema();
