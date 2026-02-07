import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicOrderByWithRelationInputObjectSchema as TopicOrderByWithRelationInputObjectSchema } from './objects/TopicOrderByWithRelationInput.schema';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './objects/TopicWhereInput.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './objects/TopicWhereUniqueInput.schema';
import { TopicCountAggregateInputObjectSchema as TopicCountAggregateInputObjectSchema } from './objects/TopicCountAggregateInput.schema';

export const TopicCountSchema: z.ZodType<Prisma.TopicCountArgs> = z.object({ orderBy: z.union([TopicOrderByWithRelationInputObjectSchema, TopicOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopicWhereInputObjectSchema.optional(), cursor: TopicWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TopicCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.TopicCountArgs>;

export const TopicCountZodSchema = z.object({ orderBy: z.union([TopicOrderByWithRelationInputObjectSchema, TopicOrderByWithRelationInputObjectSchema.array()]).optional(), where: TopicWhereInputObjectSchema.optional(), cursor: TopicWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TopicCountAggregateInputObjectSchema ]).optional() }).strict();