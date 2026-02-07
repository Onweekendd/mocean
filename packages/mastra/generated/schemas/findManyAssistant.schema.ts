import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantIncludeObjectSchema as AssistantIncludeObjectSchema } from './objects/AssistantInclude.schema';
import { AssistantOrderByWithRelationInputObjectSchema as AssistantOrderByWithRelationInputObjectSchema } from './objects/AssistantOrderByWithRelationInput.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './objects/AssistantWhereInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './objects/AssistantWhereUniqueInput.schema';
import { AssistantScalarFieldEnumSchema } from './enums/AssistantScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AssistantFindManySelectSchema: z.ZodType<Prisma.AssistantSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    prompt: z.boolean().optional(),
    type: z.boolean().optional(),
    emoji: z.boolean().optional(),
    description: z.boolean().optional(),
    enableWebSearch: z.boolean().optional(),
    webSearchProviderId: z.boolean().optional(),
    enableGenerateImage: z.boolean().optional(),
    knowledgeRecognition: z.boolean().optional(),
    model: z.boolean().optional(),
    modelId: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerId: z.boolean().optional(),
    defaultModel: z.boolean().optional(),
    defaultModelId: z.boolean().optional(),
    settings: z.boolean().optional(),
    topics: z.boolean().optional(),
    knowledgeBases: z.boolean().optional(),
    mcpServers: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AssistantSelect>;

export const AssistantFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    prompt: z.boolean().optional(),
    type: z.boolean().optional(),
    emoji: z.boolean().optional(),
    description: z.boolean().optional(),
    enableWebSearch: z.boolean().optional(),
    webSearchProviderId: z.boolean().optional(),
    enableGenerateImage: z.boolean().optional(),
    knowledgeRecognition: z.boolean().optional(),
    model: z.boolean().optional(),
    modelId: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerId: z.boolean().optional(),
    defaultModel: z.boolean().optional(),
    defaultModelId: z.boolean().optional(),
    settings: z.boolean().optional(),
    topics: z.boolean().optional(),
    knowledgeBases: z.boolean().optional(),
    mcpServers: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AssistantFindManySchema: z.ZodType<Prisma.AssistantFindManyArgs> = z.object({ select: AssistantFindManySelectSchema.optional(), include: z.lazy(() => AssistantIncludeObjectSchema.optional()), orderBy: z.union([AssistantOrderByWithRelationInputObjectSchema, AssistantOrderByWithRelationInputObjectSchema.array()]).optional(), where: AssistantWhereInputObjectSchema.optional(), cursor: AssistantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AssistantScalarFieldEnumSchema, AssistantScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AssistantFindManyArgs>;

export const AssistantFindManyZodSchema = z.object({ select: AssistantFindManySelectSchema.optional(), include: z.lazy(() => AssistantIncludeObjectSchema.optional()), orderBy: z.union([AssistantOrderByWithRelationInputObjectSchema, AssistantOrderByWithRelationInputObjectSchema.array()]).optional(), where: AssistantWhereInputObjectSchema.optional(), cursor: AssistantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AssistantScalarFieldEnumSchema, AssistantScalarFieldEnumSchema.array()]).optional() }).strict();