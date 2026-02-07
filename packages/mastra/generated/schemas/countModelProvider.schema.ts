import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelProviderOrderByWithRelationInputObjectSchema as ModelProviderOrderByWithRelationInputObjectSchema } from './objects/ModelProviderOrderByWithRelationInput.schema';
import { ModelProviderWhereInputObjectSchema as ModelProviderWhereInputObjectSchema } from './objects/ModelProviderWhereInput.schema';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './objects/ModelProviderWhereUniqueInput.schema';
import { ModelProviderCountAggregateInputObjectSchema as ModelProviderCountAggregateInputObjectSchema } from './objects/ModelProviderCountAggregateInput.schema';

export const ModelProviderCountSchema: z.ZodType<Prisma.ModelProviderCountArgs> = z.object({ orderBy: z.union([ModelProviderOrderByWithRelationInputObjectSchema, ModelProviderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelProviderWhereInputObjectSchema.optional(), cursor: ModelProviderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelProviderCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelProviderCountArgs>;

export const ModelProviderCountZodSchema = z.object({ orderBy: z.union([ModelProviderOrderByWithRelationInputObjectSchema, ModelProviderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelProviderWhereInputObjectSchema.optional(), cursor: ModelProviderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelProviderCountAggregateInputObjectSchema ]).optional() }).strict();