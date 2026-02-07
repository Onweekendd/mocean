import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeBaseIncludeObjectSchema as KnowledgeBaseIncludeObjectSchema } from './objects/KnowledgeBaseInclude.schema';
import { KnowledgeBaseOrderByWithRelationInputObjectSchema as KnowledgeBaseOrderByWithRelationInputObjectSchema } from './objects/KnowledgeBaseOrderByWithRelationInput.schema';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './objects/KnowledgeBaseWhereInput.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './objects/KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseScalarFieldEnumSchema } from './enums/KnowledgeBaseScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const KnowledgeBaseFindFirstSelectSchema: z.ZodType<Prisma.KnowledgeBaseSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    dimensions: z.boolean().optional(),
    description: z.boolean().optional(),
    documentCount: z.boolean().optional(),
    chunkSize: z.boolean().optional(),
    chunkOverlap: z.boolean().optional(),
    threshold: z.boolean().optional(),
    version: z.boolean().optional(),
    assistants: z.boolean().optional(),
    agents: z.boolean().optional(),
    model: z.boolean().optional(),
    modelId: z.boolean().optional(),
    rerankModel: z.boolean().optional(),
    rerankModelId: z.boolean().optional(),
    items: z.boolean().optional(),
    topics: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.KnowledgeBaseSelect>;

export const KnowledgeBaseFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    dimensions: z.boolean().optional(),
    description: z.boolean().optional(),
    documentCount: z.boolean().optional(),
    chunkSize: z.boolean().optional(),
    chunkOverlap: z.boolean().optional(),
    threshold: z.boolean().optional(),
    version: z.boolean().optional(),
    assistants: z.boolean().optional(),
    agents: z.boolean().optional(),
    model: z.boolean().optional(),
    modelId: z.boolean().optional(),
    rerankModel: z.boolean().optional(),
    rerankModelId: z.boolean().optional(),
    items: z.boolean().optional(),
    topics: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const KnowledgeBaseFindFirstSchema: z.ZodType<Prisma.KnowledgeBaseFindFirstArgs> = z.object({ select: KnowledgeBaseFindFirstSelectSchema.optional(), include: z.lazy(() => KnowledgeBaseIncludeObjectSchema.optional()), orderBy: z.union([KnowledgeBaseOrderByWithRelationInputObjectSchema, KnowledgeBaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: KnowledgeBaseWhereInputObjectSchema.optional(), cursor: KnowledgeBaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([KnowledgeBaseScalarFieldEnumSchema, KnowledgeBaseScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.KnowledgeBaseFindFirstArgs>;

export const KnowledgeBaseFindFirstZodSchema = z.object({ select: KnowledgeBaseFindFirstSelectSchema.optional(), include: z.lazy(() => KnowledgeBaseIncludeObjectSchema.optional()), orderBy: z.union([KnowledgeBaseOrderByWithRelationInputObjectSchema, KnowledgeBaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: KnowledgeBaseWhereInputObjectSchema.optional(), cursor: KnowledgeBaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([KnowledgeBaseScalarFieldEnumSchema, KnowledgeBaseScalarFieldEnumSchema.array()]).optional() }).strict();