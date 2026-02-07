import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  knowledgeBaseId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TopicKnowledgeBaseUncheckedUpdateWithoutTopicInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateWithoutTopicInput>;
export const TopicKnowledgeBaseUncheckedUpdateWithoutTopicInputObjectZodSchema = makeSchema();
