import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicKnowledgeBaseSelectObjectSchema as TopicKnowledgeBaseSelectObjectSchema } from './objects/TopicKnowledgeBaseSelect.schema';
import { TopicKnowledgeBaseIncludeObjectSchema as TopicKnowledgeBaseIncludeObjectSchema } from './objects/TopicKnowledgeBaseInclude.schema';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './objects/TopicKnowledgeBaseWhereUniqueInput.schema';

export const TopicKnowledgeBaseFindUniqueSchema: z.ZodType<Prisma.TopicKnowledgeBaseFindUniqueArgs> = z.object({ select: TopicKnowledgeBaseSelectObjectSchema.optional(), include: TopicKnowledgeBaseIncludeObjectSchema.optional(), where: TopicKnowledgeBaseWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseFindUniqueArgs>;

export const TopicKnowledgeBaseFindUniqueZodSchema = z.object({ select: TopicKnowledgeBaseSelectObjectSchema.optional(), include: TopicKnowledgeBaseIncludeObjectSchema.optional(), where: TopicKnowledgeBaseWhereUniqueInputObjectSchema }).strict();