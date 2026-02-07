import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ModelWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ModelWhereInputObjectSchema).optional().nullable()
}).strict();
export const ModelNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ModelNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ModelNullableScalarRelationFilter>;
export const ModelNullableScalarRelationFilterObjectZodSchema = makeSchema();
