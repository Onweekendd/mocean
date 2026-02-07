import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { QuickPhraseOrderByWithRelationInputObjectSchema as QuickPhraseOrderByWithRelationInputObjectSchema } from './objects/QuickPhraseOrderByWithRelationInput.schema';
import { QuickPhraseWhereInputObjectSchema as QuickPhraseWhereInputObjectSchema } from './objects/QuickPhraseWhereInput.schema';
import { QuickPhraseWhereUniqueInputObjectSchema as QuickPhraseWhereUniqueInputObjectSchema } from './objects/QuickPhraseWhereUniqueInput.schema';
import { QuickPhraseCountAggregateInputObjectSchema as QuickPhraseCountAggregateInputObjectSchema } from './objects/QuickPhraseCountAggregateInput.schema';

export const QuickPhraseCountSchema: z.ZodType<Prisma.QuickPhraseCountArgs> = z.object({ orderBy: z.union([QuickPhraseOrderByWithRelationInputObjectSchema, QuickPhraseOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuickPhraseWhereInputObjectSchema.optional(), cursor: QuickPhraseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QuickPhraseCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.QuickPhraseCountArgs>;

export const QuickPhraseCountZodSchema = z.object({ orderBy: z.union([QuickPhraseOrderByWithRelationInputObjectSchema, QuickPhraseOrderByWithRelationInputObjectSchema.array()]).optional(), where: QuickPhraseWhereInputObjectSchema.optional(), cursor: QuickPhraseWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), QuickPhraseCountAggregateInputObjectSchema ]).optional() }).strict();