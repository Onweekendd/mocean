import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { NestedEnumKnowledgeRecognitionNullableWithAggregatesFilterObjectSchema as NestedEnumKnowledgeRecognitionNullableWithAggregatesFilterObjectSchema } from './NestedEnumKnowledgeRecognitionNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumKnowledgeRecognitionNullableFilterObjectSchema as NestedEnumKnowledgeRecognitionNullableFilterObjectSchema } from './NestedEnumKnowledgeRecognitionNullableFilter.schema'

const makeSchema = () => z.object({
  equals: KnowledgeRecognitionSchema.optional().nullable(),
  in: KnowledgeRecognitionSchema.array().optional().nullable(),
  notIn: KnowledgeRecognitionSchema.array().optional().nullable(),
  not: z.union([KnowledgeRecognitionSchema, z.lazy(() => NestedEnumKnowledgeRecognitionNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumKnowledgeRecognitionNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumKnowledgeRecognitionNullableFilterObjectSchema).optional()
}).strict();
export const EnumKnowledgeRecognitionNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumKnowledgeRecognitionNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumKnowledgeRecognitionNullableWithAggregatesFilter>;
export const EnumKnowledgeRecognitionNullableWithAggregatesFilterObjectZodSchema = makeSchema();
