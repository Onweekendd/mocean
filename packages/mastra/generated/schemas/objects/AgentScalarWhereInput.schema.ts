import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumKnowledgeRecognitionNullableFilterObjectSchema as EnumKnowledgeRecognitionNullableFilterObjectSchema } from './EnumKnowledgeRecognitionNullableFilter.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const agentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AgentScalarWhereInputObjectSchema), z.lazy(() => AgentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AgentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AgentScalarWhereInputObjectSchema), z.lazy(() => AgentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  prompt: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emoji: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  groupJson: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  enableWebSearch: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  webSearchProviderId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  enableGenerateImage: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  knowledgeRecognition: z.union([z.lazy(() => EnumKnowledgeRecognitionNullableFilterObjectSchema), KnowledgeRecognitionSchema]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AgentScalarWhereInputObjectSchema: z.ZodType<Prisma.AgentScalarWhereInput> = agentscalarwhereinputSchema as unknown as z.ZodType<Prisma.AgentScalarWhereInput>;
export const AgentScalarWhereInputObjectZodSchema = agentscalarwhereinputSchema;
