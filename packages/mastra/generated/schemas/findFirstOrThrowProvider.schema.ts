import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProviderIncludeObjectSchema as ProviderIncludeObjectSchema } from './objects/ProviderInclude.schema';
import { ProviderOrderByWithRelationInputObjectSchema as ProviderOrderByWithRelationInputObjectSchema } from './objects/ProviderOrderByWithRelationInput.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './objects/ProviderWhereInput.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './objects/ProviderWhereUniqueInput.schema';
import { ProviderScalarFieldEnumSchema } from './enums/ProviderScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProviderFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ProviderSelect> = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    name: z.boolean().optional(),
    apiKey: z.boolean().optional(),
    apiHost: z.boolean().optional(),
    apiVersion: z.boolean().optional(),
    enabled: z.boolean().optional(),
    isSystem: z.boolean().optional(),
    isAuthed: z.boolean().optional(),
    notes: z.boolean().optional(),
    isGateway: z.boolean().optional(),
    modelCount: z.boolean().optional(),
    docsUrl: z.boolean().optional(),
    groups: z.boolean().optional(),
    modelGroups: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Assistant: z.boolean().optional(),
    models: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ProviderSelect>;

export const ProviderFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    name: z.boolean().optional(),
    apiKey: z.boolean().optional(),
    apiHost: z.boolean().optional(),
    apiVersion: z.boolean().optional(),
    enabled: z.boolean().optional(),
    isSystem: z.boolean().optional(),
    isAuthed: z.boolean().optional(),
    notes: z.boolean().optional(),
    isGateway: z.boolean().optional(),
    modelCount: z.boolean().optional(),
    docsUrl: z.boolean().optional(),
    groups: z.boolean().optional(),
    modelGroups: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Assistant: z.boolean().optional(),
    models: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ProviderFindFirstOrThrowSchema: z.ZodType<Prisma.ProviderFindFirstOrThrowArgs> = z.object({ select: ProviderFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ProviderIncludeObjectSchema.optional()), orderBy: z.union([ProviderOrderByWithRelationInputObjectSchema, ProviderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProviderWhereInputObjectSchema.optional(), cursor: ProviderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProviderScalarFieldEnumSchema, ProviderScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ProviderFindFirstOrThrowArgs>;

export const ProviderFindFirstOrThrowZodSchema = z.object({ select: ProviderFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ProviderIncludeObjectSchema.optional()), orderBy: z.union([ProviderOrderByWithRelationInputObjectSchema, ProviderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProviderWhereInputObjectSchema.optional(), cursor: ProviderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProviderScalarFieldEnumSchema, ProviderScalarFieldEnumSchema.array()]).optional() }).strict();