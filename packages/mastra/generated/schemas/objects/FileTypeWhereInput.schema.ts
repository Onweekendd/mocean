import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const filetypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FileTypeWhereInputObjectSchema), z.lazy(() => FileTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FileTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FileTypeWhereInputObjectSchema), z.lazy(() => FileTypeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  origin_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  path: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ext: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  count: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  tokens: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FileTypeWhereInputObjectSchema: z.ZodType<Prisma.FileTypeWhereInput> = filetypewhereinputSchema as unknown as z.ZodType<Prisma.FileTypeWhereInput>;
export const FileTypeWhereInputObjectZodSchema = filetypewhereinputSchema;
