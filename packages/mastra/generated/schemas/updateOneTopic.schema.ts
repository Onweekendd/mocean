import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicSelectObjectSchema as TopicSelectObjectSchema } from './objects/TopicSelect.schema';
import { TopicIncludeObjectSchema as TopicIncludeObjectSchema } from './objects/TopicInclude.schema';
import { TopicUpdateInputObjectSchema as TopicUpdateInputObjectSchema } from './objects/TopicUpdateInput.schema';
import { TopicUncheckedUpdateInputObjectSchema as TopicUncheckedUpdateInputObjectSchema } from './objects/TopicUncheckedUpdateInput.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './objects/TopicWhereUniqueInput.schema';

export const TopicUpdateOneSchema: z.ZodType<Prisma.TopicUpdateArgs> = z.object({ select: TopicSelectObjectSchema.optional(), include: TopicIncludeObjectSchema.optional(), data: z.union([TopicUpdateInputObjectSchema, TopicUncheckedUpdateInputObjectSchema]), where: TopicWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TopicUpdateArgs>;

export const TopicUpdateOneZodSchema = z.object({ select: TopicSelectObjectSchema.optional(), include: TopicIncludeObjectSchema.optional(), data: z.union([TopicUpdateInputObjectSchema, TopicUncheckedUpdateInputObjectSchema]), where: TopicWhereUniqueInputObjectSchema }).strict();