import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicOrderByWithRelationInputObjectSchema as TopicOrderByWithRelationInputObjectSchema } from './objects/TopicOrderByWithRelationInput.schema';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './objects/TopicWhereInput.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './objects/TopicWhereUniqueInput.schema';
import { TopicCountAggregateInputObjectSchema as TopicCountAggregateInputObjectSchema } from './objects/TopicCountAggregateInput.schema';
import { TopicMinAggregateInputObjectSchema as TopicMinAggregateInputObjectSchema } from './objects/TopicMinAggregateInput.schema';
import { TopicMaxAggregateInputObjectSchema as TopicMaxAggregateInputObjectSchema } from './objects/TopicMaxAggregateInput.schema';

export const TopicAggregateSchema: z.ZodType<Prisma.TopicAggregateArgs> = z.object({ orderBy: z.union([TopicOrderByWithRelationInputObjectSchema, TopicOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopicWhereInputObjectSchema.optional(), cursor: TopicWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TopicCountAggregateInputObjectSchema ]).optional(), _min: TopicMinAggregateInputObjectSchema.optional(), _max: TopicMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopicAggregateArgs>;

export const TopicAggregateZodSchema = z.object({ orderBy: z.union([TopicOrderByWithRelationInputObjectSchema, TopicOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopicWhereInputObjectSchema.optional(), cursor: TopicWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TopicCountAggregateInputObjectSchema ]).optional(), _min: TopicMinAggregateInputObjectSchema.optional(), _max: TopicMaxAggregateInputObjectSchema.optional() }).strict();