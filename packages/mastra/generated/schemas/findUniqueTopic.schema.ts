import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicSelectObjectSchema as TopicSelectObjectSchema } from './objects/TopicSelect.schema';
import { TopicIncludeObjectSchema as TopicIncludeObjectSchema } from './objects/TopicInclude.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './objects/TopicWhereUniqueInput.schema';

export const TopicFindUniqueSchema: z.ZodType<Prisma.TopicFindUniqueArgs> = z.object({ select: TopicSelectObjectSchema.optional(), include: TopicIncludeObjectSchema.optional(), where: TopicWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TopicFindUniqueArgs>;

export const TopicFindUniqueZodSchema = z.object({ select: TopicSelectObjectSchema.optional(), include: TopicIncludeObjectSchema.optional(), where: TopicWhereUniqueInputObjectSchema }).strict();