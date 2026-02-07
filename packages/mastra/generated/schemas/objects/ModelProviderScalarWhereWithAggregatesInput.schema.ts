import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const modelproviderscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelProviderScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelProviderScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelProviderScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelProviderScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelProviderScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  modelId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ModelProviderScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ModelProviderScalarWhereWithAggregatesInput> = modelproviderscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ModelProviderScalarWhereWithAggregatesInput>;
export const ModelProviderScalarWhereWithAggregatesInputObjectZodSchema = modelproviderscalarwherewithaggregatesinputSchema;
