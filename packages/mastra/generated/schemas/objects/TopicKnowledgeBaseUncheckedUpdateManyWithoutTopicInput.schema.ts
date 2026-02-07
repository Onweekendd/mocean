import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  knowledgeBaseId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TopicKnowledgeBaseUncheckedUpdateManyWithoutTopicInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateManyWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateManyWithoutTopicInput>;
export const TopicKnowledgeBaseUncheckedUpdateManyWithoutTopicInputObjectZodSchema = makeSchema();
