import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelProviderIncludeObjectSchema as ModelProviderIncludeObjectSchema } from './objects/ModelProviderInclude.schema';
import { ModelProviderOrderByWithRelationInputObjectSchema as ModelProviderOrderByWithRelationInputObjectSchema } from './objects/ModelProviderOrderByWithRelationInput.schema';
import { ModelProviderWhereInputObjectSchema as ModelProviderWhereInputObjectSchema } from './objects/ModelProviderWhereInput.schema';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './objects/ModelProviderWhereUniqueInput.schema';
import { ModelProviderScalarFieldEnumSchema } from './enums/ModelProviderScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ModelProviderFindFirstSelectSchema: z.ZodType<Prisma.ModelProviderSelect> = z.object({
    model: z.boolean().optional(),
    modelId: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ModelProviderSelect>;

export const ModelProviderFindFirstSelectZodSchema = z.object({
    model: z.boolean().optional(),
    modelId: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const ModelProviderFindFirstSchema: z.ZodType<Prisma.ModelProviderFindFirstArgs> = z.object({ select: ModelProviderFindFirstSelectSchema.optional(), include: z.lazy(() => ModelProviderIncludeObjectSchema.optional()), orderBy: z.union([ModelProviderOrderByWithRelationInputObjectSchema, ModelProviderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelProviderWhereInputObjectSchema.optional(), cursor: ModelProviderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelProviderScalarFieldEnumSchema, ModelProviderScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ModelProviderFindFirstArgs>;

export const ModelProviderFindFirstZodSchema = z.object({ select: ModelProviderFindFirstSelectSchema.optional(), include: z.lazy(() => ModelProviderIncludeObjectSchema.optional()), orderBy: z.union([ModelProviderOrderByWithRelationInputObjectSchema, ModelProviderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ModelProviderWhereInputObjectSchema.optional(), cursor: ModelProviderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ModelProviderScalarFieldEnumSchema, ModelProviderScalarFieldEnumSchema.array()]).optional() }).strict();