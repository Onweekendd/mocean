import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { KnowledgeItemOrderByWithRelationInputObjectSchema as KnowledgeItemOrderByWithRelationInputObjectSchema } from './objects/KnowledgeItemOrderByWithRelationInput.schema';
import { KnowledgeItemWhereInputObjectSchema as KnowledgeItemWhereInputObjectSchema } from './objects/KnowledgeItemWhereInput.schema';
import { KnowledgeItemWhereUniqueInputObjectSchema as KnowledgeItemWhereUniqueInputObjectSchema } from './objects/KnowledgeItemWhereUniqueInput.schema';
import { KnowledgeItemCountAggregateInputObjectSchema as KnowledgeItemCountAggregateInputObjectSchema } from './objects/KnowledgeItemCountAggregateInput.schema';

export const KnowledgeItemCountSchema: z.ZodType<Prisma.KnowledgeItemCountArgs> = z.object({ orderBy: z.union([KnowledgeItemOrderByWithRelationInputObjectSchema, KnowledgeItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: KnowledgeItemWhereInputObjectSchema.optional(), cursor: KnowledgeItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), KnowledgeItemCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.KnowledgeItemCountArgs>;

export const KnowledgeItemCountZodSchema = z.object({ orderBy: z.union([KnowledgeItemOrderByWithRelationInputObjectSchema, KnowledgeItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: KnowledgeItemWhereInputObjectSchema.optional(), cursor: KnowledgeItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), KnowledgeItemCountAggregateInputObjectSchema ]).optional() }).strict();