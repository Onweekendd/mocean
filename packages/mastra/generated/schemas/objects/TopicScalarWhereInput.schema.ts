import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const topicscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TopicScalarWhereInputObjectSchema), z.lazy(() => TopicScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TopicScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TopicScalarWhereInputObjectSchema), z.lazy(() => TopicScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  prompt: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  pinned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isNameManuallyEdited: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  assistantId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  agentId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  modelId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TopicScalarWhereInputObjectSchema: z.ZodType<Prisma.TopicScalarWhereInput> = topicscalarwhereinputSchema as unknown as z.ZodType<Prisma.TopicScalarWhereInput>;
export const TopicScalarWhereInputObjectZodSchema = topicscalarwhereinputSchema;
