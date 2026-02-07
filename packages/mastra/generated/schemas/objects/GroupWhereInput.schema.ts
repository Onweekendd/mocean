import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ProviderScalarRelationFilterObjectSchema as ProviderScalarRelationFilterObjectSchema } from './ProviderScalarRelationFilter.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema';
import { ModelGroupListRelationFilterObjectSchema as ModelGroupListRelationFilterObjectSchema } from './ModelGroupListRelationFilter.schema'

const groupwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GroupWhereInputObjectSchema), z.lazy(() => GroupWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GroupWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GroupWhereInputObjectSchema), z.lazy(() => GroupWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isDefault: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  provider: z.union([z.lazy(() => ProviderScalarRelationFilterObjectSchema), z.lazy(() => ProviderWhereInputObjectSchema)]).optional(),
  models: z.lazy(() => ModelGroupListRelationFilterObjectSchema).optional()
}).strict();
export const GroupWhereInputObjectSchema: z.ZodType<Prisma.GroupWhereInput> = groupwhereinputSchema as unknown as z.ZodType<Prisma.GroupWhereInput>;
export const GroupWhereInputObjectZodSchema = groupwhereinputSchema;
