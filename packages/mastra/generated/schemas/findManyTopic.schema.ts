import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicIncludeObjectSchema as TopicIncludeObjectSchema } from './objects/TopicInclude.schema';
import { TopicOrderByWithRelationInputObjectSchema as TopicOrderByWithRelationInputObjectSchema } from './objects/TopicOrderByWithRelationInput.schema';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './objects/TopicWhereInput.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './objects/TopicWhereUniqueInput.schema';
import { TopicScalarFieldEnumSchema } from './enums/TopicScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TopicFindManySelectSchema: z.ZodType<Prisma.TopicSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    prompt: z.boolean().optional(),
    pinned: z.boolean().optional(),
    isNameManuallyEdited: z.boolean().optional(),
    assistant: z.boolean().optional(),
    assistantId: z.boolean().optional(),
    agent: z.boolean().optional(),
    agentId: z.boolean().optional(),
    modelId: z.boolean().optional(),
    model: z.boolean().optional(),
    knowledgeBases: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TopicSelect>;

export const TopicFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    prompt: z.boolean().optional(),
    pinned: z.boolean().optional(),
    isNameManuallyEdited: z.boolean().optional(),
    assistant: z.boolean().optional(),
    assistantId: z.boolean().optional(),
    agent: z.boolean().optional(),
    agentId: z.boolean().optional(),
    modelId: z.boolean().optional(),
    model: z.boolean().optional(),
    knowledgeBases: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const TopicFindManySchema: z.ZodType<Prisma.TopicFindManyArgs> = z.object({ select: TopicFindManySelectSchema.optional(), include: z.lazy(() => TopicIncludeObjectSchema.optional()), orderBy: z.union([TopicOrderByWithRelationInputObjectSchema, TopicOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopicWhereInputObjectSchema.optional(), cursor: TopicWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TopicScalarFieldEnumSchema, TopicScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TopicFindManyArgs>;

export const TopicFindManyZodSchema = z.object({ select: TopicFindManySelectSchema.optional(), include: z.lazy(() => TopicIncludeObjectSchema.optional()), orderBy: z.union([TopicOrderByWithRelationInputObjectSchema, TopicOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopicWhereInputObjectSchema.optional(), cursor: TopicWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TopicScalarFieldEnumSchema, TopicScalarFieldEnumSchema.array()]).optional() }).strict();