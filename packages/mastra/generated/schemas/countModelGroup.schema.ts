import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelGroupOrderByWithRelationInputObjectSchema as ModelGroupOrderByWithRelationInputObjectSchema } from './objects/ModelGroupOrderByWithRelationInput.schema';
import { ModelGroupWhereInputObjectSchema as ModelGroupWhereInputObjectSchema } from './objects/ModelGroupWhereInput.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './objects/ModelGroupWhereUniqueInput.schema';
import { ModelGroupCountAggregateInputObjectSchema as ModelGroupCountAggregateInputObjectSchema } from './objects/ModelGroupCountAggregateInput.schema';

export const ModelGroupCountSchema: z.ZodType<Prisma.ModelGroupCountArgs> = z.object({ orderBy: z.union([ModelGroupOrderByWithRelationInputObjectSchema, ModelGroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelGroupWhereInputObjectSchema.optional(), cursor: ModelGroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelGroupCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelGroupCountArgs>;

export const ModelGroupCountZodSchema = z.object({ orderBy: z.union([ModelGroupOrderByWithRelationInputObjectSchema, ModelGroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelGroupWhereInputObjectSchema.optional(), cursor: ModelGroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelGroupCountAggregateInputObjectSchema ]).optional() }).strict();