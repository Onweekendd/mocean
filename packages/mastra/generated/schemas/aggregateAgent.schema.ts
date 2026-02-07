import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AgentOrderByWithRelationInputObjectSchema as AgentOrderByWithRelationInputObjectSchema } from './objects/AgentOrderByWithRelationInput.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './objects/AgentWhereInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './objects/AgentWhereUniqueInput.schema';
import { AgentCountAggregateInputObjectSchema as AgentCountAggregateInputObjectSchema } from './objects/AgentCountAggregateInput.schema';
import { AgentMinAggregateInputObjectSchema as AgentMinAggregateInputObjectSchema } from './objects/AgentMinAggregateInput.schema';
import { AgentMaxAggregateInputObjectSchema as AgentMaxAggregateInputObjectSchema } from './objects/AgentMaxAggregateInput.schema';

export const AgentAggregateSchema: z.ZodType<Prisma.AgentAggregateArgs> = z.object({ orderBy: z.union([AgentOrderByWithRelationInputObjectSchema, AgentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgentWhereInputObjectSchema.optional(), cursor: AgentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AgentCountAggregateInputObjectSchema ]).optional(), _min: AgentMinAggregateInputObjectSchema.optional(), _max: AgentMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgentAggregateArgs>;

export const AgentAggregateZodSchema = z.object({ orderBy: z.union([AgentOrderByWithRelationInputObjectSchema, AgentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgentWhereInputObjectSchema.optional(), cursor: AgentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AgentCountAggregateInputObjectSchema ]).optional(), _min: AgentMinAggregateInputObjectSchema.optional(), _max: AgentMaxAggregateInputObjectSchema.optional() }).strict();