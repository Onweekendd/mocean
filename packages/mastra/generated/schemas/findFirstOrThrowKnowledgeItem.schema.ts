import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeItemIncludeObjectSchema as KnowledgeItemIncludeObjectSchema } from './objects/KnowledgeItemInclude.schema';
import { KnowledgeItemOrderByWithRelationInputObjectSchema as KnowledgeItemOrderByWithRelationInputObjectSchema } from './objects/KnowledgeItemOrderByWithRelationInput.schema';
import { KnowledgeItemWhereInputObjectSchema as KnowledgeItemWhereInputObjectSchema } from './objects/KnowledgeItemWhereInput.schema';
import { KnowledgeItemWhereUniqueInputObjectSchema as KnowledgeItemWhereUniqueInputObjectSchema } from './objects/KnowledgeItemWhereUniqueInput.schema';
import { KnowledgeItemScalarFieldEnumSchema } from './enums/KnowledgeItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const KnowledgeItemFindFirstOrThrowSelectSchema: z.ZodType<Prisma.KnowledgeItemSelect> = z.object({
    id: z.boolean().optional(),
    uniqueId: z.boolean().optional(),
    uniqueIdsJson: z.boolean().optional(),
    type: z.boolean().optional(),
    content: z.boolean().optional(),
    remark: z.boolean().optional(),
    processingStatus: z.boolean().optional(),
    processingProgress: z.boolean().optional(),
    processingError: z.boolean().optional(),
    retryCount: z.boolean().optional(),
    knowledgeBase: z.boolean().optional(),
    baseId: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.KnowledgeItemSelect>;

export const KnowledgeItemFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    uniqueId: z.boolean().optional(),
    uniqueIdsJson: z.boolean().optional(),
    type: z.boolean().optional(),
    content: z.boolean().optional(),
    remark: z.boolean().optional(),
    processingStatus: z.boolean().optional(),
    processingProgress: z.boolean().optional(),
    processingError: z.boolean().optional(),
    retryCount: z.boolean().optional(),
    knowledgeBase: z.boolean().optional(),
    baseId: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional()
  }).strict();

export const KnowledgeItemFindFirstOrThrowSchema: z.ZodType<Prisma.KnowledgeItemFindFirstOrThrowArgs> = z.object({ select: KnowledgeItemFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => KnowledgeItemIncludeObjectSchema.optional()), orderBy: z.union([KnowledgeItemOrderByWithRelationInputObjectSchema, KnowledgeItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: KnowledgeItemWhereInputObjectSchema.optional(), cursor: KnowledgeItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([KnowledgeItemScalarFieldEnumSchema, KnowledgeItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.KnowledgeItemFindFirstOrThrowArgs>;

export const KnowledgeItemFindFirstOrThrowZodSchema = z.object({ select: KnowledgeItemFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => KnowledgeItemIncludeObjectSchema.optional()), orderBy: z.union([KnowledgeItemOrderByWithRelationInputObjectSchema, KnowledgeItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: KnowledgeItemWhereInputObjectSchema.optional(), cursor: KnowledgeItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([KnowledgeItemScalarFieldEnumSchema, KnowledgeItemScalarFieldEnumSchema.array()]).optional() }).strict();