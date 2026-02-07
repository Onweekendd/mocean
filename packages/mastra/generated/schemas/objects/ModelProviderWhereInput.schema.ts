import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { ModelScalarRelationFilterObjectSchema as ModelScalarRelationFilterObjectSchema } from './ModelScalarRelationFilter.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ProviderScalarRelationFilterObjectSchema as ProviderScalarRelationFilterObjectSchema } from './ProviderScalarRelationFilter.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema'

const modelproviderwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ModelProviderWhereInputObjectSchema), z.lazy(() => ModelProviderWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ModelProviderWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ModelProviderWhereInputObjectSchema), z.lazy(() => ModelProviderWhereInputObjectSchema).array()]).optional(),
  modelId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  model: z.union([z.lazy(() => ModelScalarRelationFilterObjectSchema), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  provider: z.union([z.lazy(() => ProviderScalarRelationFilterObjectSchema), z.lazy(() => ProviderWhereInputObjectSchema)]).optional()
}).strict();
export const ModelProviderWhereInputObjectSchema: z.ZodType<Prisma.ModelProviderWhereInput> = modelproviderwhereinputSchema as unknown as z.ZodType<Prisma.ModelProviderWhereInput>;
export const ModelProviderWhereInputObjectZodSchema = modelproviderwhereinputSchema;
