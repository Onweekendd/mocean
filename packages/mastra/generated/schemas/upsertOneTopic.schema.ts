import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicSelectObjectSchema as TopicSelectObjectSchema } from './objects/TopicSelect.schema';
import { TopicIncludeObjectSchema as TopicIncludeObjectSchema } from './objects/TopicInclude.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './objects/TopicWhereUniqueInput.schema';
import { TopicCreateInputObjectSchema as TopicCreateInputObjectSchema } from './objects/TopicCreateInput.schema';
import { TopicUncheckedCreateInputObjectSchema as TopicUncheckedCreateInputObjectSchema } from './objects/TopicUncheckedCreateInput.schema';
import { TopicUpdateInputObjectSchema as TopicUpdateInputObjectSchema } from './objects/TopicUpdateInput.schema';
import { TopicUncheckedUpdateInputObjectSchema as TopicUncheckedUpdateInputObjectSchema } from './objects/TopicUncheckedUpdateInput.schema';

export const TopicUpsertOneSchema: z.ZodType<Prisma.TopicUpsertArgs> = z.object({ select: TopicSelectObjectSchema.optional(), include: TopicIncludeObjectSchema.optional(), where: TopicWhereUniqueInputObjectSchema, create: z.union([ TopicCreateInputObjectSchema, TopicUncheckedCreateInputObjectSchema ]), update: z.union([ TopicUpdateInputObjectSchema, TopicUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TopicUpsertArgs>;

export const TopicUpsertOneZodSchema = z.object({ select: TopicSelectObjectSchema.optional(), include: TopicIncludeObjectSchema.optional(), where: TopicWhereUniqueInputObjectSchema, create: z.union([ TopicCreateInputObjectSchema, TopicUncheckedCreateInputObjectSchema ]), update: z.union([ TopicUpdateInputObjectSchema, TopicUncheckedUpdateInputObjectSchema ]) }).strict();