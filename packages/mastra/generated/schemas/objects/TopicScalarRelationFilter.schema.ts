import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './TopicWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => TopicWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => TopicWhereInputObjectSchema).optional()
}).strict();
export const TopicScalarRelationFilterObjectSchema: z.ZodType<Prisma.TopicScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TopicScalarRelationFilter>;
export const TopicScalarRelationFilterObjectZodSchema = makeSchema();
