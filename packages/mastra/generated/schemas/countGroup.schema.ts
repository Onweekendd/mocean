import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { GroupOrderByWithRelationInputObjectSchema as GroupOrderByWithRelationInputObjectSchema } from './objects/GroupOrderByWithRelationInput.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './objects/GroupWhereInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './objects/GroupWhereUniqueInput.schema';
import { GroupCountAggregateInputObjectSchema as GroupCountAggregateInputObjectSchema } from './objects/GroupCountAggregateInput.schema';

export const GroupCountSchema: z.ZodType<Prisma.GroupCountArgs> = z.object({ orderBy: z.union([GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupWhereInputObjectSchema.optional(), cursor: GroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GroupCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GroupCountArgs>;

export const GroupCountZodSchema = z.object({ orderBy: z.union([GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupWhereInputObjectSchema.optional(), cursor: GroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GroupCountAggregateInputObjectSchema ]).optional() }).strict();