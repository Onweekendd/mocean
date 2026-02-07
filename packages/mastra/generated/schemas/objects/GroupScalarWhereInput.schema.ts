import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const groupscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GroupScalarWhereInputObjectSchema), z.lazy(() => GroupScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GroupScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GroupScalarWhereInputObjectSchema), z.lazy(() => GroupScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isDefault: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GroupScalarWhereInputObjectSchema: z.ZodType<Prisma.GroupScalarWhereInput> = groupscalarwhereinputSchema as unknown as z.ZodType<Prisma.GroupScalarWhereInput>;
export const GroupScalarWhereInputObjectZodSchema = groupscalarwhereinputSchema;
