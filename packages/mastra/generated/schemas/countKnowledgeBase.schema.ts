import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeBaseOrderByWithRelationInputObjectSchema as KnowledgeBaseOrderByWithRelationInputObjectSchema } from './objects/KnowledgeBaseOrderByWithRelationInput.schema';
import { KnowledgeBaseWhereInputObjectSchema as KnowledgeBaseWhereInputObjectSchema } from './objects/KnowledgeBaseWhereInput.schema';
import { KnowledgeBaseWhereUniqueInputObjectSchema as KnowledgeBaseWhereUniqueInputObjectSchema } from './objects/KnowledgeBaseWhereUniqueInput.schema';
import { KnowledgeBaseCountAggregateInputObjectSchema as KnowledgeBaseCountAggregateInputObjectSchema } from './objects/KnowledgeBaseCountAggregateInput.schema';

export const KnowledgeBaseCountSchema: z.ZodType<Prisma.KnowledgeBaseCountArgs> = z.object({ orderBy: z.union([KnowledgeBaseOrderByWithRelationInputObjectSchema, KnowledgeBaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: KnowledgeBaseWhereInputObjectSchema.optional(), cursor: KnowledgeBaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), KnowledgeBaseCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.KnowledgeBaseCountArgs>;

export const KnowledgeBaseCountZodSchema = z.object({ orderBy: z.union([KnowledgeBaseOrderByWithRelationInputObjectSchema, KnowledgeBaseOrderByWithRelationInputObjectSchema.array()]).optional(), where: KnowledgeBaseWhereInputObjectSchema.optional(), cursor: KnowledgeBaseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), KnowledgeBaseCountAggregateInputObjectSchema ]).optional() }).strict();