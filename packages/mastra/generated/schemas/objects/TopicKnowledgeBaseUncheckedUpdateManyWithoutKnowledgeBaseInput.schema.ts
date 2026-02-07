import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  topicId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseInput>;
export const TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
