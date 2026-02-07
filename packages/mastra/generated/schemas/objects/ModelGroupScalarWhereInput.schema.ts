import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const modelgroupscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelGroupScalarWhereInputObjectSchema), z.lazy(() => ModelGroupScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelGroupScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelGroupScalarWhereInputObjectSchema), z.lazy(() => ModelGroupScalarWhereInputObjectSchema).array()]).optional(),
  modelId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  groupId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ModelGroupScalarWhereInputObjectSchema: z.ZodType<Prisma.ModelGroupScalarWhereInput> = modelgroupscalarwhereinputSchema as unknown as z.ZodType<Prisma.ModelGroupScalarWhereInput>;
export const ModelGroupScalarWhereInputObjectZodSchema = modelgroupscalarwhereinputSchema;
