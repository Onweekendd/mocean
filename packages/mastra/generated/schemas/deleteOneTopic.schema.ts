import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicSelectObjectSchema as TopicSelectObjectSchema } from './objects/TopicSelect.schema';
import { TopicIncludeObjectSchema as TopicIncludeObjectSchema } from './objects/TopicInclude.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './objects/TopicWhereUniqueInput.schema';

export const TopicDeleteOneSchema: z.ZodType<Prisma.TopicDeleteArgs> = z.object({ select: TopicSelectObjectSchema.optional(), include: TopicIncludeObjectSchema.optional(), where: TopicWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TopicDeleteArgs>;

export const TopicDeleteOneZodSchema = z.object({ select: TopicSelectObjectSchema.optional(), include: TopicIncludeObjectSchema.optional(), where: TopicWhereUniqueInputObjectSchema }).strict();