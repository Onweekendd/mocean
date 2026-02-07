import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { NestedEnumKnowledgeRecognitionNullableFilterObjectSchema as NestedEnumKnowledgeRecognitionNullableFilterObjectSchema } from './NestedEnumKnowledgeRecognitionNullableFilter.schema'

const makeSchema = () => z.object({
  equals: KnowledgeRecognitionSchema.optional().nullable(),
  in: KnowledgeRecognitionSchema.array().optional().nullable(),
  notIn: KnowledgeRecognitionSchema.array().optional().nullable(),
  not: z.union([KnowledgeRecognitionSchema, z.lazy(() => NestedEnumKnowledgeRecognitionNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumKnowledgeRecognitionNullableFilterObjectSchema: z.ZodType<Prisma.EnumKnowledgeRecognitionNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumKnowledgeRecognitionNullableFilter>;
export const EnumKnowledgeRecognitionNullableFilterObjectZodSchema = makeSchema();
