import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const modelgroupscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelGroupScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelGroupScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelGroupScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelGroupScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ModelGroupScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  modelId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  groupId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ModelGroupScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ModelGroupScalarWhereWithAggregatesInput> = modelgroupscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ModelGroupScalarWhereWithAggregatesInput>;
export const ModelGroupScalarWhereWithAggregatesInputObjectZodSchema = modelgroupscalarwherewithaggregatesinputSchema;
