import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { KnowledgeBaseScalarRelationFilterObjectSchema as KnowledgeBaseScalarRelationFilterObjectSchema } from './KnowledgeBaseScalarRelationFilter.schema';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './KnowledgeBaseWhereInput.schema'

const knowledgeitemwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => KnowledgeItemWhereInputObjectSchema), z.lazy(() => KnowledgeItemWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => KnowledgeItemWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => KnowledgeItemWhereInputObjectSchema), z.lazy(() => KnowledgeItemWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  uniqueId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  uniqueIdsJson: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.lazy(() => JsonFilterObjectSchema).optional(),
  remark: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  processingStatus: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  processingProgress: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  processingError: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  retryCount: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  baseId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  knowledgeBase: z.union([z.lazy(() => KnowledgeBaseScalarRelationFilterObjectSchema), z.lazy(() => KnowledgeBaseWhereInputObjectSchema)]).optional()
}).strict();
export const KnowledgeItemWhereInputObjectSchema: z.ZodType<Prisma.KnowledgeItemWhereInput> = knowledgeitemwhereinputSchema as unknown as z.ZodType<Prisma.KnowledgeItemWhereInput>;
export const KnowledgeItemWhereInputObjectZodSchema = knowledgeitemwhereinputSchema;
