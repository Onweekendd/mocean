import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupWhereInputObjectSchema as ModelGroupWhereInputObjectSchema } from './ModelGroupWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ModelGroupWhereInputObjectSchema).optional(),
  some: z.lazy(() => ModelGroupWhereInputObjectSchema).optional(),
  none: z.lazy(() => ModelGroupWhereInputObjectSchema).optional()
}).strict();
export const ModelGroupListRelationFilterObjectSchema: z.ZodType<Prisma.ModelGroupListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupListRelationFilter>;
export const ModelGroupListRelationFilterObjectZodSchema = makeSchema();
