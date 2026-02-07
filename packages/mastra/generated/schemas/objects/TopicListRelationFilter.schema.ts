import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './TopicWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TopicWhereInputObjectSchema).optional(),
  some: z.lazy(() => TopicWhereInputObjectSchema).optional(),
  none: z.lazy(() => TopicWhereInputObjectSchema).optional()
}).strict();
export const TopicListRelationFilterObjectSchema: z.ZodType<Prisma.TopicListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TopicListRelationFilter>;
export const TopicListRelationFilterObjectZodSchema = makeSchema();
