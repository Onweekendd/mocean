import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { TopicWhereInputObjectSchema as TopicWhereInputObjectSchema } from './objects/TopicWhereInput.schema';
import { TopicOrderByWithAggregationInputObjectSchema as TopicOrderByWithAggregationInputObjectSchema } from './objects/TopicOrderByWithAggregationInput.schema';
import { TopicScalarWhereWithAggregatesInputObjectSchema as TopicScalarWhereWithAggregatesInputObjectSchema } from './objects/TopicScalarWhereWithAggregatesInput.schema';
import { TopicScalarFieldEnumSchema } from './enums/TopicScalarFieldEnum.schema';
import { TopicCountAggregateInputObjectSchema as TopicCountAggregateInputObjectSchema } from './objects/TopicCountAggregateInput.schema';
import { TopicMinAggregateInputObjectSchema as TopicMinAggregateInputObjectSchema } from './objects/TopicMinAggregateInput.schema';
import { TopicMaxAggregateInputObjectSchema as TopicMaxAggregateInputObjectSchema } from './objects/TopicMaxAggregateInput.schema';

export const TopicGroupBySchema: z.ZodType<Prisma.TopicGroupByArgs> = z.object({ where: TopicWhereInputObjectSchema.optional(), orderBy: z.union([TopicOrderByWithAggregationInputObjectSchema, TopicOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TopicScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TopicScalarFieldEnumSchema), _count: z.union([ z.literal(true), TopicCountAggregateInputObjectSchema ]).optional(), _min: TopicMinAggregateInputObjectSchema.optional(), _max: TopicMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TopicGroupByArgs>;

export const TopicGroupByZodSchema = z.object({ where: TopicWhereInputObjectSchema.optional(), orderBy: z.union([TopicOrderByWithAggregationInputObjectSchema, TopicOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TopicScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TopicScalarFieldEnumSchema), _count: z.union([ z.literal(true), TopicCountAggregateInputObjectSchema ]).optional(), _min: TopicMinAggregateInputObjectSchema.optional(), _max: TopicMaxAggregateInputObjectSchema.optional() }).strict();