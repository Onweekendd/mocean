import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const knowledgebasescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema), z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema), z.lazy(() => KnowledgeBaseScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dimensions: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  documentCount: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  chunkSize: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  chunkOverlap: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  threshold: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  version: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  modelId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  rerankModelId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const KnowledgeBaseScalarWhereInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseScalarWhereInput> = knowledgebasescalarwhereinputSchema as unknown as z.ZodType<Prisma.KnowledgeBaseScalarWhereInput>;
export const KnowledgeBaseScalarWhereInputObjectZodSchema = knowledgebasescalarwhereinputSchema;
