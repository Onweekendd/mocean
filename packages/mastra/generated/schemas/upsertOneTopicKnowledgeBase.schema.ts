import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicKnowledgeBaseSelectObjectSchema as TopicKnowledgeBaseSelectObjectSchema } from './objects/TopicKnowledgeBaseSelect.schema';
import { TopicKnowledgeBaseIncludeObjectSchema as TopicKnowledgeBaseIncludeObjectSchema } from './objects/TopicKnowledgeBaseInclude.schema';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './objects/TopicKnowledgeBaseWhereUniqueInput.schema';
import { TopicKnowledgeBaseCreateInputObjectSchema as TopicKnowledgeBaseCreateInputObjectSchema } from './objects/TopicKnowledgeBaseCreateInput.schema';
import { TopicKnowledgeBaseUncheckedCreateInputObjectSchema as TopicKnowledgeBaseUncheckedCreateInputObjectSchema } from './objects/TopicKnowledgeBaseUncheckedCreateInput.schema';
import { TopicKnowledgeBaseUpdateInputObjectSchema as TopicKnowledgeBaseUpdateInputObjectSchema } from './objects/TopicKnowledgeBaseUpdateInput.schema';
import { TopicKnowledgeBaseUncheckedUpdateInputObjectSchema as TopicKnowledgeBaseUncheckedUpdateInputObjectSchema } from './objects/TopicKnowledgeBaseUncheckedUpdateInput.schema';

export const TopicKnowledgeBaseUpsertOneSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpsertArgs> = z.object({ select: TopicKnowledgeBaseSelectObjectSchema.optional(), include: TopicKnowledgeBaseIncludeObjectSchema.optional(), where: TopicKnowledgeBaseWhereUniqueInputObjectSchema, create: z.union([ TopicKnowledgeBaseCreateInputObjectSchema, TopicKnowledgeBaseUncheckedCreateInputObjectSchema ]), update: z.union([ TopicKnowledgeBaseUpdateInputObjectSchema, TopicKnowledgeBaseUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpsertArgs>;

export const TopicKnowledgeBaseUpsertOneZodSchema = z.object({ select: TopicKnowledgeBaseSelectObjectSchema.optional(), include: TopicKnowledgeBaseIncludeObjectSchema.optional(), where: TopicKnowledgeBaseWhereUniqueInputObjectSchema, create: z.union([ TopicKnowledgeBaseCreateInputObjectSchema, TopicKnowledgeBaseUncheckedCreateInputObjectSchema ]), update: z.union([ TopicKnowledgeBaseUpdateInputObjectSchema, TopicKnowledgeBaseUncheckedUpdateInputObjectSchema ]) }).strict();