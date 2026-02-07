import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ProviderWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ProviderWhereInputObjectSchema).optional()
}).strict();
export const ProviderScalarRelationFilterObjectSchema: z.ZodType<Prisma.ProviderScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProviderScalarRelationFilter>;
export const ProviderScalarRelationFilterObjectZodSchema = makeSchema();
