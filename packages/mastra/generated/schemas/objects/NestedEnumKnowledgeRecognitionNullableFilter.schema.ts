import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema'

const nestedenumknowledgerecognitionnullablefilterSchema = z.object({
  equals: KnowledgeRecognitionSchema.optional().nullable(),
  in: KnowledgeRecognitionSchema.array().optional().nullable(),
  notIn: KnowledgeRecognitionSchema.array().optional().nullable(),
  not: z.union([KnowledgeRecognitionSchema, z.lazy(() => NestedEnumKnowledgeRecognitionNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumKnowledgeRecognitionNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumKnowledgeRecognitionNullableFilter> = nestedenumknowledgerecognitionnullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumKnowledgeRecognitionNullableFilter>;
export const NestedEnumKnowledgeRecognitionNullableFilterObjectZodSchema = nestedenumknowledgerecognitionnullablefilterSchema;
