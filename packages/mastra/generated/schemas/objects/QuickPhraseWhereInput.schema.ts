import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const quickphrasewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => QuickPhraseWhereInputObjectSchema), z.lazy(() => QuickPhraseWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuickPhraseWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuickPhraseWhereInputObjectSchema), z.lazy(() => QuickPhraseWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QuickPhraseWhereInputObjectSchema: z.ZodType<Prisma.QuickPhraseWhereInput> = quickphrasewhereinputSchema as unknown as z.ZodType<Prisma.QuickPhraseWhereInput>;
export const QuickPhraseWhereInputObjectZodSchema = quickphrasewhereinputSchema;
