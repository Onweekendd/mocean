import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuickPhraseOrderByWithRelationInputObjectSchema as QuickPhraseOrderByWithRelationInputObjectSchema } from './objects/QuickPhraseOrderByWithRelationInput.schema';
import { QuickPhraseWhereInputObjectSchema as QuickPhraseWhereInputObjectSchema } from './objects/QuickPhraseWhereInput.schema';
import { QuickPhraseWhereUniqueInputObjectSchema as QuickPhraseWhereUniqueInputObjectSchema } from './objects/QuickPhraseWhereUniqueInput.schema';
import { QuickPhraseScalarFieldEnumSchema } from './enums/QuickPhraseScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const QuickPhraseFindFirstSelectSchema: z.ZodType<Prisma.QuickPhraseSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    order: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.QuickPhraseSelect>;

export const QuickPhraseFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    content: z.boolean().optional(),
    order: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const QuickPhraseFindFirstSchema: z.ZodType<Prisma.QuickPhraseFindFirstArgs> = z.object({ select: QuickPhraseFindFirstSelectSchema.optional(),  orderBy: z.union([QuickPhraseOrderByWithRelationInputObjectSchema, QuickPhraseOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuickPhraseWhereInputObjectSchema.optional(), cursor: QuickPhraseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QuickPhraseScalarFieldEnumSchema, QuickPhraseScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.QuickPhraseFindFirstArgs>;

export const QuickPhraseFindFirstZodSchema = z.object({ select: QuickPhraseFindFirstSelectSchema.optional(),  orderBy: z.union([QuickPhraseOrderByWithRelationInputObjectSchema, QuickPhraseOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuickPhraseWhereInputObjectSchema.optional(), cursor: QuickPhraseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([QuickPhraseScalarFieldEnumSchema, QuickPhraseScalarFieldEnumSchema.array()]).optional() }).strict();