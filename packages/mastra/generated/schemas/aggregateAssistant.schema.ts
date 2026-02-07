import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantOrderByWithRelationInputObjectSchema as AssistantOrderByWithRelationInputObjectSchema } from './objects/AssistantOrderByWithRelationInput.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './objects/AssistantWhereInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './objects/AssistantWhereUniqueInput.schema';
import { AssistantCountAggregateInputObjectSchema as AssistantCountAggregateInputObjectSchema } from './objects/AssistantCountAggregateInput.schema';
import { AssistantMinAggregateInputObjectSchema as AssistantMinAggregateInputObjectSchema } from './objects/AssistantMinAggregateInput.schema';
import { AssistantMaxAggregateInputObjectSchema as AssistantMaxAggregateInputObjectSchema } from './objects/AssistantMaxAggregateInput.schema';

export const AssistantAggregateSchema: z.ZodType<Prisma.AssistantAggregateArgs> = z.object({ orderBy: z.union([AssistantOrderByWithRelationInputObjectSchema, AssistantOrderByWithRelationInputObjectSchema.array()]).optional(), where: AssistantWhereInputObjectSchema.optional(), cursor: AssistantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AssistantCountAggregateInputObjectSchema ]).optional(), _min: AssistantMinAggregateInputObjectSchema.optional(), _max: AssistantMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AssistantAggregateArgs>;

export const AssistantAggregateZodSchema = z.object({ orderBy: z.union([AssistantOrderByWithRelationInputObjectSchema, AssistantOrderByWithRelationInputObjectSchema.array()]).optional(), where: AssistantWhereInputObjectSchema.optional(), cursor: AssistantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AssistantCountAggregateInputObjectSchema ]).optional(), _min: AssistantMinAggregateInputObjectSchema.optional(), _max: AssistantMaxAggregateInputObjectSchema.optional() }).strict();