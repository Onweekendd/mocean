import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicUpdateManyMutationInputObjectSchema as TopicUpdateManyMutationInputObjectSchema } from './objects/TopicUpdateManyMutationInput.schema';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './objects/TopicWhereInput.schema';

export const TopicUpdateManySchema: z.ZodType<Prisma.TopicUpdateManyArgs> = z.object({ data: TopicUpdateManyMutationInputObjectSchema, where: TopicWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopicUpdateManyArgs>;

export const TopicUpdateManyZodSchema = z.object({ data: TopicUpdateManyMutationInputObjectSchema, where: TopicWhereInputObjectSchema.optional() }).strict();