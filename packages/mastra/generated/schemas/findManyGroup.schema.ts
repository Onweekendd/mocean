import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { GroupIncludeObjectSchema as GroupIncludeObjectSchema } from './objects/GroupInclude.schema';
import { GroupOrderByWithRelationInputObjectSchema as GroupOrderByWithRelationInputObjectSchema } from './objects/GroupOrderByWithRelationInput.schema';
import { GroupWhereInputObjectSchema as GroupWhereInputObjectSchema } from './objects/GroupWhereInput.schema';
import { GroupWhereUniqueInputObjectSchema as GroupWhereUniqueInputObjectSchema } from './objects/GroupWhereUniqueInput.schema';
import { GroupScalarFieldEnumSchema } from './enums/GroupScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GroupFindManySelectSchema: z.ZodType<Prisma.GroupSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    providerId: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    provider: z.boolean().optional(),
    models: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GroupSelect>;

export const GroupFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    providerId: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    provider: z.boolean().optional(),
    models: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const GroupFindManySchema: z.ZodType<Prisma.GroupFindManyArgs> = z.object({ select: GroupFindManySelectSchema.optional(), include: z.lazy(() => GroupIncludeObjectSchema.optional()), orderBy: z.union([GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupWhereInputObjectSchema.optional(), cursor: GroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupScalarFieldEnumSchema, GroupScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GroupFindManyArgs>;

export const GroupFindManyZodSchema = z.object({ select: GroupFindManySelectSchema.optional(), include: z.lazy(() => GroupIncludeObjectSchema.optional()), orderBy: z.union([GroupOrderByWithRelationInputObjectSchema, GroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupWhereInputObjectSchema.optional(), cursor: GroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupScalarFieldEnumSchema, GroupScalarFieldEnumSchema.array()]).optional() }).strict();