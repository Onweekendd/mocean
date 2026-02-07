import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumKnowledgeRecognitionNullableFilterObjectSchema as EnumKnowledgeRecognitionNullableFilterObjectSchema } from './EnumKnowledgeRecognitionNullableFilter.schema';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const assistantscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AssistantScalarWhereInputObjectSchema), z.lazy(() => AssistantScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AssistantScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AssistantScalarWhereInputObjectSchema), z.lazy(() => AssistantScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  prompt: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  emoji: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  enableWebSearch: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  webSearchProviderId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  enableGenerateImage: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  knowledgeRecognition: z.union([z.lazy(() => EnumKnowledgeRecognitionNullableFilterObjectSchema), KnowledgeRecognitionSchema]).optional().nullable(),
  modelId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  providerId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  defaultModelId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AssistantScalarWhereInputObjectSchema: z.ZodType<Prisma.AssistantScalarWhereInput> = assistantscalarwhereinputSchema as unknown as z.ZodType<Prisma.AssistantScalarWhereInput>;
export const AssistantScalarWhereInputObjectZodSchema = assistantscalarwhereinputSchema;
