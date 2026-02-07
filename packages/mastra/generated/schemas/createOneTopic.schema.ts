import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicSelectObjectSchema as TopicSelectObjectSchema } from './objects/TopicSelect.schema';
import { TopicIncludeObjectSchema as TopicIncludeObjectSchema } from './objects/TopicInclude.schema';
import { TopicCreateInputObjectSchema as TopicCreateInputObjectSchema } from './objects/TopicCreateInput.schema';
import { TopicUncheckedCreateInputObjectSchema as TopicUncheckedCreateInputObjectSchema } from './objects/TopicUncheckedCreateInput.schema';

export const TopicCreateOneSchema: z.ZodType<Prisma.TopicCreateArgs> = z.object({ select: TopicSelectObjectSchema.optional(), include: TopicIncludeObjectSchema.optional(), data: z.union([TopicCreateInputObjectSchema, TopicUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TopicCreateArgs>;

export const TopicCreateOneZodSchema = z.object({ select: TopicSelectObjectSchema.optional(), include: TopicIncludeObjectSchema.optional(), data: z.union([TopicCreateInputObjectSchema, TopicUncheckedCreateInputObjectSchema]) }).strict();