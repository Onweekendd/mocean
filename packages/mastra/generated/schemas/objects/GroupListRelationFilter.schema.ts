import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './GroupWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => GroupWhereInputObjectSchema).optional(),
  some: z.lazy(() => GroupWhereInputObjectSchema).optional(),
  none: z.lazy(() => GroupWhereInputObjectSchema).optional()
}).strict();
export const GroupListRelationFilterObjectSchema: z.ZodType<Prisma.GroupListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GroupListRelationFilter>;
export const GroupListRelationFilterObjectZodSchema = makeSchema();
