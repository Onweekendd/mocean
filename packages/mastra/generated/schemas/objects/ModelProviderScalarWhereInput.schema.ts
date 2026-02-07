import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const modelproviderscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelProviderScalarWhereInputObjectSchema), z.lazy(() => ModelProviderScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelProviderScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelProviderScalarWhereInputObjectSchema), z.lazy(() => ModelProviderScalarWhereInputObjectSchema).array()]).optional(),
  modelId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ModelProviderScalarWhereInputObjectSchema: z.ZodType<Prisma.ModelProviderScalarWhereInput> = modelproviderscalarwhereinputSchema as unknown as z.ZodType<Prisma.ModelProviderScalarWhereInput>;
export const ModelProviderScalarWhereInputObjectZodSchema = modelproviderscalarwhereinputSchema;
