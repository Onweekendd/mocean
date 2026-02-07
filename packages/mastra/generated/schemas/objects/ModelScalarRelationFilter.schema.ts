import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ModelWhereInputObjectSchema).optional()
}).strict();
export const ModelScalarRelationFilterObjectSchema: z.ZodType<Prisma.ModelScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ModelScalarRelationFilter>;
export const ModelScalarRelationFilterObjectZodSchema = makeSchema();
