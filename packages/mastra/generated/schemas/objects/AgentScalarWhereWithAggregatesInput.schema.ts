import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { EnumKnowledgeRecognitionNullableWithAggregatesFilterObjectSchema as EnumKnowledgeRecognitionNullableWithAggregatesFilterObjectSchema } from './EnumKnowledgeRecognitionNullableWithAggregatesFilter.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const agentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AgentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AgentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AgentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  prompt: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  emoji: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  groupJson: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  enableWebSearch: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  webSearchProviderId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  enableGenerateImage: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  knowledgeRecognition: z.union([z.lazy(() => EnumKnowledgeRecognitionNullableWithAggregatesFilterObjectSchema), KnowledgeRecognitionSchema]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AgentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AgentScalarWhereWithAggregatesInput> = agentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AgentScalarWhereWithAggregatesInput>;
export const AgentScalarWhereWithAggregatesInputObjectZodSchema = agentscalarwherewithaggregatesinputSchema;
