import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicKnowledgeBaseSelectObjectSchema as TopicKnowledgeBaseSelectObjectSchema } from './objects/TopicKnowledgeBaseSelect.schema';
import { TopicKnowledgeBaseIncludeObjectSchema as TopicKnowledgeBaseIncludeObjectSchema } from './objects/TopicKnowledgeBaseInclude.schema';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './objects/TopicKnowledgeBaseWhereUniqueInput.schema';

export const TopicKnowledgeBaseDeleteOneSchema: z.ZodType<Prisma.TopicKnowledgeBaseDeleteArgs> = z.object({ select: TopicKnowledgeBaseSelectObjectSchema.optional(), include: TopicKnowledgeBaseIncludeObjectSchema.optional(), where: TopicKnowledgeBaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseDeleteArgs>;

export const TopicKnowledgeBaseDeleteOneZodSchema = z.object({ select: TopicKnowledgeBaseSelectObjectSchema.optional(), include: TopicKnowledgeBaseIncludeObjectSchema.optional(), where: TopicKnowledgeBaseWhereUniqueInputObjectSchema }).strict();