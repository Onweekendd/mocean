import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './objects/TopicWhereInput.schema';

export const TopicDeleteManySchema: z.ZodType<Prisma.TopicDeleteManyArgs> = z.object({ where: TopicWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopicDeleteManyArgs>;

export const TopicDeleteManyZodSchema = z.object({ where: TopicWhereInputObjectSchema.optional() }).strict();