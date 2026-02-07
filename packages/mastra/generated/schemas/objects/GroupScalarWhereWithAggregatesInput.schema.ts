import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const groupscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GroupScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GroupScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GroupScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GroupScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GroupScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isDefault: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GroupScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GroupScalarWhereWithAggregatesInput> = groupscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GroupScalarWhereWithAggregatesInput>;
export const GroupScalarWhereWithAggregatesInputObjectZodSchema = groupscalarwherewithaggregatesinputSchema;
