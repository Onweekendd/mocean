import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AgentWhereInputObjectSchema as AgentWhereInputObjectSchema } from './objects/AgentWhereInput.schema';
import { AgentOrderByWithAggregationInputObjectSchema as AgentOrderByWithAggregationInputObjectSchema } from './objects/AgentOrderByWithAggregationInput.schema';
import { AgentScalarWhereWithAggregatesInputObjectSchema as AgentScalarWhereWithAggregatesInputObjectSchema } from './objects/AgentScalarWhereWithAggregatesInput.schema';
import { AgentScalarFieldEnumSchema } from './enums/AgentScalarFieldEnum.schema';
import { AgentCountAggregateInputObjectSchema as AgentCountAggregateInputObjectSchema } from './objects/AgentCountAggregateInput.schema';
import { AgentMinAggregateInputObjectSchema as AgentMinAggregateInputObjectSchema } from './objects/AgentMinAggregateInput.schema';
import { AgentMaxAggregateInputObjectSchema as AgentMaxAggregateInputObjectSchema } from './objects/AgentMaxAggregateInput.schema';

export const AgentGroupBySchema: z.ZodType<Prisma.AgentGroupByArgs> = z.object({ where: AgentWhereInputObjectSchema.optional(), orderBy: z.union([AgentOrderByWithAggregationInputObjectSchema, AgentOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AgentScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AgentScalarFieldEnumSchema), _count: z.union([ z.literal(true), AgentCountAggregateInputObjectSchema ]).optional(), _min: AgentMinAggregateInputObjectSchema.optional(), _max: AgentMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AgentGroupByArgs>;

export const AgentGroupByZodSchema = z.object({ where: AgentWhereInputObjectSchema.optional(), orderBy: z.union([AgentOrderByWithAggregationInputObjectSchema, AgentOrderByWithAggregationInputObjectSchema.array()]).optional(), having: AgentScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(AgentScalarFieldEnumSchema), _count: z.union([ z.literal(true), AgentCountAggregateInputObjectSchema ]).optional(), _min: AgentMinAggregateInputObjectSchema.optional(), _max: AgentMaxAggregateInputObjectSchema.optional() }).strict();