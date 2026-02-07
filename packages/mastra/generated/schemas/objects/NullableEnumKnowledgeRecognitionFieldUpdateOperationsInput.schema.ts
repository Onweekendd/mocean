import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema'

const makeSchema = () => z.object({
  set: KnowledgeRecognitionSchema.optional()
}).strict();
export const NullableEnumKnowledgeRecognitionFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumKnowledgeRecognitionFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumKnowledgeRecognitionFieldUpdateOperationsInput>;
export const NullableEnumKnowledgeRecognitionFieldUpdateOperationsInputObjectZodSchema = makeSchema();
