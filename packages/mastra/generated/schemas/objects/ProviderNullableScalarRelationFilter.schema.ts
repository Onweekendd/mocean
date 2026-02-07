import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ProviderWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => ProviderWhereInputObjectSchema).optional().nullable()
}).strict();
export const ProviderNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProviderNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProviderNullableScalarRelationFilter>;
export const ProviderNullableScalarRelationFilterObjectZodSchema = makeSchema();
