import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AgentOrderByWithRelationInputObjectSchema as AgentOrderByWithRelationInputObjectSchema } from './objects/AgentOrderByWithRelationInput.schema';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './objects/AgentWhereInput.schema';
import { AgentWhereUniqueInputObjectSchema as AgentWhereUniqueInputObjectSchema } from './objects/AgentWhereUniqueInput.schema';
import { AgentCountAggregateInputObjectSchema as AgentCountAggregateInputObjectSchema } from './objects/AgentCountAggregateInput.schema';

export const AgentCountSchema: z.ZodType<Prisma.AgentCountArgs> = z.object({ orderBy: z.union([AgentOrderByWithRelationInputObjectSchema, AgentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgentWhereInputObjectSchema.optional(), cursor: AgentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AgentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AgentCountArgs>;

export const AgentCountZodSchema = z.object({ orderBy: z.union([AgentOrderByWithRelationInputObjectSchema, AgentOrderByWithRelationInputObjectSchema.array()]).optional(), where: AgentWhereInputObjectSchema.optional(), cursor: AgentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AgentCountAggregateInputObjectSchema ]).optional() }).strict();