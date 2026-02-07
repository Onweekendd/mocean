import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  topicId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  knowledgeBaseId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TopicKnowledgeBaseUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateInput>;
export const TopicKnowledgeBaseUncheckedUpdateInputObjectZodSchema = makeSchema();
