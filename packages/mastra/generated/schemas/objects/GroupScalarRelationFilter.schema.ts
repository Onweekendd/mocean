import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => GroupWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => GroupWhereInputObjectSchema).optional()
}).strict();
export const GroupScalarRelationFilterObjectSchema: z.ZodType<Prisma.GroupScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GroupScalarRelationFilter>;
export const GroupScalarRelationFilterObjectZodSchema = makeSchema();
