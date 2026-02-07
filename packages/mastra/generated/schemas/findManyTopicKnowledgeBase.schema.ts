import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicKnowledgeBaseIncludeObjectSchema as TopicKnowledgeBaseIncludeObjectSchema } from './objects/TopicKnowledgeBaseInclude.schema';
import { TopicKnowledgeBaseOrderByWithRelationInputObjectSchema as TopicKnowledgeBaseOrderByWithRelationInputObjectSchema } from './objects/TopicKnowledgeBaseOrderByWithRelationInput.schema';
import { TopicKnowledgeBaseWhereInputObjectSchema as TopicKnowledgeBaseWhereInputObjectSchema } from './objects/TopicKnowledgeBaseWhereInput.schema';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './objects/TopicKnowledgeBaseWhereUniqueInput.schema';
import { TopicKnowledgeBaseScalarFieldEnumSchema } from './enums/TopicKnowledgeBaseScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TopicKnowledgeBaseFindManySelectSchema: z.ZodType<Prisma.TopicKnowledgeBaseSelect> = z.object({
    topic: z.boolean().optional(),
    topicId: z.boolean().optional(),
    knowledgeBase: z.boolean().optional(),
    knowledgeBaseId: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseSelect>;

export const TopicKnowledgeBaseFindManySelectZodSchema = z.object({
    topic: z.boolean().optional(),
    topicId: z.boolean().optional(),
    knowledgeBase: z.boolean().optional(),
    knowledgeBaseId: z.boolean().optional()
  }).strict();

export const TopicKnowledgeBaseFindManySchema: z.ZodType<Prisma.TopicKnowledgeBaseFindManyArgs> = z.object({ select: TopicKnowledgeBaseFindManySelectSchema.optional(), include: z.lazy(() => TopicKnowledgeBaseIncludeObjectSchema.optional()), orderBy: z.union([TopicKnowledgeBaseOrderByWithRelationInputObjectSchema, TopicKnowledgeBaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopicKnowledgeBaseWhereInputObjectSchema.optional(), cursor: TopicKnowledgeBaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TopicKnowledgeBaseScalarFieldEnumSchema, TopicKnowledgeBaseScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseFindManyArgs>;

export const TopicKnowledgeBaseFindManyZodSchema = z.object({ select: TopicKnowledgeBaseFindManySelectSchema.optional(), include: z.lazy(() => TopicKnowledgeBaseIncludeObjectSchema.optional()), orderBy: z.union([TopicKnowledgeBaseOrderByWithRelationInputObjectSchema, TopicKnowledgeBaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopicKnowledgeBaseWhereInputObjectSchema.optional(), cursor: TopicKnowledgeBaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TopicKnowledgeBaseScalarFieldEnumSchema, TopicKnowledgeBaseScalarFieldEnumSchema.array()]).optional() }).strict();