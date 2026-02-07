import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ModelScalarRelationFilterObjectSchema as ModelScalarRelationFilterObjectSchema } from './ModelScalarRelationFilter.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { GroupScalarRelationFilterObjectSchema as GroupScalarRelationFilterObjectSchema } from './GroupScalarRelationFilter.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema';
import { ProviderScalarRelationFilterObjectSchema as ProviderScalarRelationFilterObjectSchema } from './ProviderScalarRelationFilter.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema'

const modelgroupwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelGroupWhereInputObjectSchema), z.lazy(() => ModelGroupWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelGroupWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelGroupWhereInputObjectSchema), z.lazy(() => ModelGroupWhereInputObjectSchema).array()]).optional(),
  modelId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  groupId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  model: z.union([z.lazy(() => ModelScalarRelationFilterObjectSchema), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  group: z.union([z.lazy(() => GroupScalarRelationFilterObjectSchema), z.lazy(() => GroupWhereInputObjectSchema)]).optional(),
  provider: z.union([z.lazy(() => ProviderScalarRelationFilterObjectSchema), z.lazy(() => ProviderWhereInputObjectSchema)]).optional()
}).strict();
export const ModelGroupWhereInputObjectSchema: z.ZodType<Prisma.ModelGroupWhereInput> = modelgroupwhereinputSchema as unknown as z.ZodType<Prisma.ModelGroupWhereInput>;
export const ModelGroupWhereInputObjectZodSchema = modelgroupwhereinputSchema;
