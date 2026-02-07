import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelGroupIncludeObjectSchema as ModelGroupIncludeObjectSchema } from './objects/ModelGroupInclude.schema';
import { ModelGroupOrderByWithRelationInputObjectSchema as ModelGroupOrderByWithRelationInputObjectSchema } from './objects/ModelGroupOrderByWithRelationInput.schema';
import { ModelGroupWhereInputObjectSchema as ModelGroupWhereInputObjectSchema } from './objects/ModelGroupWhereInput.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './objects/ModelGroupWhereUniqueInput.schema';
import { ModelGroupScalarFieldEnumSchema } from './enums/ModelGroupScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ModelGroupFindFirstSelectSchema: z.ZodType<Prisma.ModelGroupSelect> = z.object({
    model: z.boolean().optional(),
    modelId: z.boolean().optional(),
    group: z.boolean().optional(),
    groupId: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ModelGroupSelect>;

export const ModelGroupFindFirstSelectZodSchema = z.object({
    model: z.boolean().optional(),
    modelId: z.boolean().optional(),
    group: z.boolean().optional(),
    groupId: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ModelGroupFindFirstSchema: z.ZodType<Prisma.ModelGroupFindFirstArgs> = z.object({ select: ModelGroupFindFirstSelectSchema.optional(), include: z.lazy(() => ModelGroupIncludeObjectSchema.optional()), orderBy: z.union([ModelGroupOrderByWithRelationInputObjectSchema, ModelGroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelGroupWhereInputObjectSchema.optional(), cursor: ModelGroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelGroupScalarFieldEnumSchema, ModelGroupScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelGroupFindFirstArgs>;

export const ModelGroupFindFirstZodSchema = z.object({ select: ModelGroupFindFirstSelectSchema.optional(), include: z.lazy(() => ModelGroupIncludeObjectSchema.optional()), orderBy: z.union([ModelGroupOrderByWithRelationInputObjectSchema, ModelGroupOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelGroupWhereInputObjectSchema.optional(), cursor: ModelGroupWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelGroupScalarFieldEnumSchema, ModelGroupScalarFieldEnumSchema.array()]).optional() }).strict();