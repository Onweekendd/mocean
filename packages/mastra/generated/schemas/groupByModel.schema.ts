import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './objects/ModelWhereInput.schema';
import { ModelOrderByWithAggregationInputObjectSchema as ModelOrderByWithAggregationInputObjectSchema } from './objects/ModelOrderByWithAggregationInput.schema';
import { ModelScalarWhereWithAggregatesInputObjectSchema as ModelScalarWhereWithAggregatesInputObjectSchema } from './objects/ModelScalarWhereWithAggregatesInput.schema';
import { ModelScalarFieldEnumSchema } from './enums/ModelScalarFieldEnum.schema';
import { ModelCountAggregateInputObjectSchema as ModelCountAggregateInputObjectSchema } from './objects/ModelCountAggregateInput.schema';
import { ModelMinAggregateInputObjectSchema as ModelMinAggregateInputObjectSchema } from './objects/ModelMinAggregateInput.schema';
import { ModelMaxAggregateInputObjectSchema as ModelMaxAggregateInputObjectSchema } from './objects/ModelMaxAggregateInput.schema';
import { ModelAvgAggregateInputObjectSchema as ModelAvgAggregateInputObjectSchema } from './objects/ModelAvgAggregateInput.schema';
import { ModelSumAggregateInputObjectSchema as ModelSumAggregateInputObjectSchema } from './objects/ModelSumAggregateInput.schema';

export const ModelGroupBySchema: z.ZodType<Prisma.ModelGroupByArgs> = z.object({ where: ModelWhereInputObjectSchema.optional(), orderBy: z.union([ModelOrderByWithAggregationInputObjectSchema, ModelOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ModelScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ModelScalarFieldEnumSchema), _count: z.union([ z.literal(true), ModelCountAggregateInputObjectSchema ]).optional(), _min: ModelMinAggregateInputObjectSchema.optional(), _max: ModelMaxAggregateInputObjectSchema.optional(), _avg: ModelAvgAggregateInputObjectSchema.optional(), _sum: ModelSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelGroupByArgs>;

export const ModelGroupByZodSchema = z.object({ where: ModelWhereInputObjectSchema.optional(), orderBy: z.union([ModelOrderByWithAggregationInputObjectSchema, ModelOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ModelScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ModelScalarFieldEnumSchema), _count: z.union([ z.literal(true), ModelCountAggregateInputObjectSchema ]).optional(), _min: ModelMinAggregateInputObjectSchema.optional(), _max: ModelMaxAggregateInputObjectSchema.optional(), _avg: ModelAvgAggregateInputObjectSchema.optional(), _sum: ModelSumAggregateInputObjectSchema.optional() }).strict();