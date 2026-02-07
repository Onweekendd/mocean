import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  topicId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  knowledgeBaseId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TopicKnowledgeBaseUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateManyInput>;
export const TopicKnowledgeBaseUncheckedUpdateManyInputObjectZodSchema = makeSchema();
