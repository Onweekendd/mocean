import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelOrderByWithRelationInputObjectSchema as ModelOrderByWithRelationInputObjectSchema } from './objects/ModelOrderByWithRelationInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './objects/ModelWhereInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './objects/ModelWhereUniqueInput.schema';
import { ModelCountAggregateInputObjectSchema as ModelCountAggregateInputObjectSchema } from './objects/ModelCountAggregateInput.schema';

export const ModelCountSchema: z.ZodType<Prisma.ModelCountArgs> = z.object({ orderBy: z.union([ModelOrderByWithRelationInputObjectSchema, ModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelWhereInputObjectSchema.optional(), cursor: ModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelCountArgs>;

export const ModelCountZodSchema = z.object({ orderBy: z.union([ModelOrderByWithRelationInputObjectSchema, ModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelWhereInputObjectSchema.optional(), cursor: ModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelCountAggregateInputObjectSchema ]).optional() }).strict();