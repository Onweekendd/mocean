import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const quickphrasescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => QuickPhraseScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QuickPhraseScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => QuickPhraseScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => QuickPhraseScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => QuickPhraseScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const QuickPhraseScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.QuickPhraseScalarWhereWithAggregatesInput> = quickphrasescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.QuickPhraseScalarWhereWithAggregatesInput>;
export const QuickPhraseScalarWhereWithAggregatesInputObjectZodSchema = quickphrasescalarwherewithaggregatesinputSchema;
