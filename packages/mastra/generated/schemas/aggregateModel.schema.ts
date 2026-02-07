import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelOrderByWithRelationInputObjectSchema as ModelOrderByWithRelationInputObjectSchema } from './objects/ModelOrderByWithRelationInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './objects/ModelWhereInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './objects/ModelWhereUniqueInput.schema';
import { ModelCountAggregateInputObjectSchema as ModelCountAggregateInputObjectSchema } from './objects/ModelCountAggregateInput.schema';
import { ModelMinAggregateInputObjectSchema as ModelMinAggregateInputObjectSchema } from './objects/ModelMinAggregateInput.schema';
import { ModelMaxAggregateInputObjectSchema as ModelMaxAggregateInputObjectSchema } from './objects/ModelMaxAggregateInput.schema';
import { ModelAvgAggregateInputObjectSchema as ModelAvgAggregateInputObjectSchema } from './objects/ModelAvgAggregateInput.schema';
import { ModelSumAggregateInputObjectSchema as ModelSumAggregateInputObjectSchema } from './objects/ModelSumAggregateInput.schema';

export const ModelAggregateSchema: z.ZodType<Prisma.ModelAggregateArgs> = z.object({ orderBy: z.union([ModelOrderByWithRelationInputObjectSchema, ModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelWhereInputObjectSchema.optional(), cursor: ModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ModelCountAggregateInputObjectSchema ]).optional(), _min: ModelMinAggregateInputObjectSchema.optional(), _max: ModelMaxAggregateInputObjectSchema.optional(), _avg: ModelAvgAggregateInputObjectSchema.optional(), _sum: ModelSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelAggregateArgs>;

export const ModelAggregateZodSchema = z.object({ orderBy: z.union([ModelOrderByWithRelationInputObjectSchema, ModelOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelWhereInputObjectSchema.optional(), cursor: ModelWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ModelCountAggregateInputObjectSchema ]).optional(), _min: ModelMinAggregateInputObjectSchema.optional(), _max: ModelMaxAggregateInputObjectSchema.optional(), _avg: ModelAvgAggregateInputObjectSchema.optional(), _sum: ModelSumAggregateInputObjectSchema.optional() }).strict();