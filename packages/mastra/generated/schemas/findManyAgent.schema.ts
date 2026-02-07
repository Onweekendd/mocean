import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AgentIncludeObjectSchema as AgentIncludeObjectSchema } from './objects/AgentInclude.schema';
import { AgentOrderByWithRelationInputObjectSchema as AgentOrderByWithRelationInputObjectSchema } from './objects/AgentOrderByWithRelationInput.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './objects/AgentWhereInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './objects/AgentWhereUniqueInput.schema';
import { AgentScalarFieldEnumSchema } from './enums/AgentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AgentFindManySelectSchema: z.ZodType<Prisma.AgentSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    prompt: z.boolean().optional(),
    type: z.boolean().optional(),
    emoji: z.boolean().optional(),
    description: z.boolean().optional(),
    groupJson: z.boolean().optional(),
    enableWebSearch: z.boolean().optional(),
    webSearchProviderId: z.boolean().optional(),
    enableGenerateImage: z.boolean().optional(),
    knowledgeRecognition: z.boolean().optional(),
    settings: z.boolean().optional(),
    topics: z.boolean().optional(),
    knowledgeBases: z.boolean().optional(),
    mcpServers: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AgentSelect>;

export const AgentFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    prompt: z.boolean().optional(),
    type: z.boolean().optional(),
    emoji: z.boolean().optional(),
    description: z.boolean().optional(),
    groupJson: z.boolean().optional(),
    enableWebSearch: z.boolean().optional(),
    webSearchProviderId: z.boolean().optional(),
    enableGenerateImage: z.boolean().optional(),
    knowledgeRecognition: z.boolean().optional(),
    settings: z.boolean().optional(),
    topics: z.boolean().optional(),
    knowledgeBases: z.boolean().optional(),
    mcpServers: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const AgentFindManySchema: z.ZodType<Prisma.AgentFindManyArgs> = z.object({ select: AgentFindManySelectSchema.optional(), include: z.lazy(() => AgentIncludeObjectSchema.optional()), orderBy: z.union([AgentOrderByWithRelationInputObjectSchema, AgentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgentWhereInputObjectSchema.optional(), cursor: AgentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgentScalarFieldEnumSchema, AgentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AgentFindManyArgs>;

export const AgentFindManyZodSchema = z.object({ select: AgentFindManySelectSchema.optional(), include: z.lazy(() => AgentIncludeObjectSchema.optional()), orderBy: z.union([AgentOrderByWithRelationInputObjectSchema, AgentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgentWhereInputObjectSchema.optional(), cursor: AgentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AgentScalarFieldEnumSchema, AgentScalarFieldEnumSchema.array()]).optional() }).strict();