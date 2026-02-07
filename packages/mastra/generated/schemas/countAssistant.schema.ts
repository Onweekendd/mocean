import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { AssistantOrderByWithRelationInputObjectSchema as AssistantOrderByWithRelationInputObjectSchema } from './objects/AssistantOrderByWithRelationInput.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './objects/AssistantWhereInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './objects/AssistantWhereUniqueInput.schema';
import { AssistantCountAggregateInputObjectSchema as AssistantCountAggregateInputObjectSchema } from './objects/AssistantCountAggregateInput.schema';

export const AssistantCountSchema: z.ZodType<Prisma.AssistantCountArgs> = z.object({ orderBy: z.union([AssistantOrderByWithRelationInputObjectSchema, AssistantOrderByWithRelationInputObjectSchema.array()]).optional(), where: AssistantWhereInputObjectSchema.optional(), cursor: AssistantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AssistantCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AssistantCountArgs>;

export const AssistantCountZodSchema = z.object({ orderBy: z.union([AssistantOrderByWithRelationInputObjectSchema, AssistantOrderByWithRelationInputObjectSchema.array()]).optional(), where: AssistantWhereInputObjectSchema.optional(), cursor: AssistantWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AssistantCountAggregateInputObjectSchema ]).optional() }).strict();