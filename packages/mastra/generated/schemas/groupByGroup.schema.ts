import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './objects/GroupWhereInput.schema';
import { GroupOrderByWithAggregationInputObjectSchema as GroupOrderByWithAggregationInputObjectSchema } from './objects/GroupOrderByWithAggregationInput.schema';
import { GroupScalarWhereWithAggregatesInputObjectSchema as GroupScalarWhereWithAggregatesInputObjectSchema } from './objects/GroupScalarWhereWithAggregatesInput.schema';
import { GroupScalarFieldEnumSchema } from './enums/GroupScalarFieldEnum.schema';
import { GroupCountAggregateInputObjectSchema as GroupCountAggregateInputObjectSchema } from './objects/GroupCountAggregateInput.schema';
import { GroupMinAggregateInputObjectSchema as GroupMinAggregateInputObjectSchema } from './objects/GroupMinAggregateInput.schema';
import { GroupMaxAggregateInputObjectSchema as GroupMaxAggregateInputObjectSchema } from './objects/GroupMaxAggregateInput.schema';

export const GroupGroupBySchema: z.ZodType<Prisma.GroupGroupByArgs> = z.object({ where: GroupWhereInputObjectSchema.optional(), orderBy: z.union([GroupOrderByWithAggregationInputObjectSchema, GroupOrderByWithAggregationInputObjectSchema.array()]).optional(), having: GroupScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(GroupScalarFieldEnumSchema), _count: z.union([ z.literal(true), GroupCountAggregateInputObjectSchema ]).optional(), _min: GroupMinAggregateInputObjectSchema.optional(), _max: GroupMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GroupGroupByArgs>;

export const GroupGroupByZodSchema = z.object({ where: GroupWhereInputObjectSchema.optional(), orderBy: z.union([GroupOrderByWithAggregationInputObjectSchema, GroupOrderByWithAggregationInputObjectSchema.array()]).optional(), having: GroupScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(GroupScalarFieldEnumSchema), _count: z.union([ z.literal(true), GroupCountAggregateInputObjectSchema ]).optional(), _min: GroupMinAggregateInputObjectSchema.optional(), _max: GroupMaxAggregateInputObjectSchema.optional() }).strict();