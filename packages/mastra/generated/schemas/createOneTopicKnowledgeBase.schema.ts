import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicKnowledgeBaseSelectObjectSchema as TopicKnowledgeBaseSelectObjectSchema } from './objects/TopicKnowledgeBaseSelect.schema';
import { TopicKnowledgeBaseIncludeObjectSchema as TopicKnowledgeBaseIncludeObjectSchema } from './objects/TopicKnowledgeBaseInclude.schema';
import { TopicKnowledgeBaseCreateInputObjectSchema as TopicKnowledgeBaseCreateInputObjectSchema } from './objects/TopicKnowledgeBaseCreateInput.schema';
import { TopicKnowledgeBaseUncheckedCreateInputObjectSchema as TopicKnowledgeBaseUncheckedCreateInputObjectSchema } from './objects/TopicKnowledgeBaseUncheckedCreateInput.schema';

export const TopicKnowledgeBaseCreateOneSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateArgs> = z.object({ select: TopicKnowledgeBaseSelectObjectSchema.optional(), include: TopicKnowledgeBaseIncludeObjectSchema.optional(), data: z.union([TopicKnowledgeBaseCreateInputObjectSchema, TopicKnowledgeBaseUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateArgs>;

export const TopicKnowledgeBaseCreateOneZodSchema = z.object({ select: TopicKnowledgeBaseSelectObjectSchema.optional(), include: TopicKnowledgeBaseIncludeObjectSchema.optional(), data: z.union([TopicKnowledgeBaseCreateInputObjectSchema, TopicKnowledgeBaseUncheckedCreateInputObjectSchema]) }).strict();