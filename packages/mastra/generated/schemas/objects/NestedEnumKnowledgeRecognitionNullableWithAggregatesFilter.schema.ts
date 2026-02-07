import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumKnowledgeRecognitionNullableFilterObjectSchema as NestedEnumKnowledgeRecognitionNullableFilterObjectSchema } from './NestedEnumKnowledgeRecognitionNullableFilter.schema'

const nestedenumknowledgerecognitionnullablewithaggregatesfilterSchema = z.object({
  equals: KnowledgeRecognitionSchema.optional().nullable(),
  in: KnowledgeRecognitionSchema.array().optional().nullable(),
  notIn: KnowledgeRecognitionSchema.array().optional().nullable(),
  not: z.union([KnowledgeRecognitionSchema, z.lazy(() => NestedEnumKnowledgeRecognitionNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumKnowledgeRecognitionNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumKnowledgeRecognitionNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumKnowledgeRecognitionNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumKnowledgeRecognitionNullableWithAggregatesFilter> = nestedenumknowledgerecognitionnullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumKnowledgeRecognitionNullableWithAggregatesFilter>;
export const NestedEnumKnowledgeRecognitionNullableWithAggregatesFilterObjectZodSchema = nestedenumknowledgerecognitionnullablewithaggregatesfilterSchema;
