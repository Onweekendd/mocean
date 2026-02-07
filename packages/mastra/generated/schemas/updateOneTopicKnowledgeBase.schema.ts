import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicKnowledgeBaseSelectObjectSchema as TopicKnowledgeBaseSelectObjectSchema } from './objects/TopicKnowledgeBaseSelect.schema';
import { TopicKnowledgeBaseIncludeObjectSchema as TopicKnowledgeBaseIncludeObjectSchema } from './objects/TopicKnowledgeBaseInclude.schema';
import { TopicKnowledgeBaseUpdateInputObjectSchema as TopicKnowledgeBaseUpdateInputObjectSchema } from './objects/TopicKnowledgeBaseUpdateInput.schema';
import { TopicKnowledgeBaseUncheckedUpdateInputObjectSchema as TopicKnowledgeBaseUncheckedUpdateInputObjectSchema } from './objects/TopicKnowledgeBaseUncheckedUpdateInput.schema';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './objects/TopicKnowledgeBaseWhereUniqueInput.schema';

export const TopicKnowledgeBaseUpdateOneSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpdateArgs> = z.object({ select: TopicKnowledgeBaseSelectObjectSchema.optional(), include: TopicKnowledgeBaseIncludeObjectSchema.optional(), data: z.union([TopicKnowledgeBaseUpdateInputObjectSchema, TopicKnowledgeBaseUncheckedUpdateInputObjectSchema]), where: TopicKnowledgeBaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpdateArgs>;

export const TopicKnowledgeBaseUpdateOneZodSchema = z.object({ select: TopicKnowledgeBaseSelectObjectSchema.optional(), include: TopicKnowledgeBaseIncludeObjectSchema.optional(), data: z.union([TopicKnowledgeBaseUpdateInputObjectSchema, TopicKnowledgeBaseUncheckedUpdateInputObjectSchema]), where: TopicKnowledgeBaseWhereUniqueInputObjectSchema }).strict();