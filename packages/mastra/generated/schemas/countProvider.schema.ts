import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProviderOrderByWithRelationInputObjectSchema as ProviderOrderByWithRelationInputObjectSchema } from './objects/ProviderOrderByWithRelationInput.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './objects/ProviderWhereInput.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './objects/ProviderWhereUniqueInput.schema';
import { ProviderCountAggregateInputObjectSchema as ProviderCountAggregateInputObjectSchema } from './objects/ProviderCountAggregateInput.schema';

export const ProviderCountSchema: z.ZodType<Prisma.ProviderCountArgs> = z.object({ orderBy: z.union([ProviderOrderByWithRelationInputObjectSchema, ProviderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProviderWhereInputObjectSchema.optional(), cursor: ProviderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProviderCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ProviderCountArgs>;

export const ProviderCountZodSchema = z.object({ orderBy: z.union([ProviderOrderByWithRelationInputObjectSchema, ProviderOrderByWithRelationInputObjectSchema.array()]).optional(), where: ProviderWhereInputObjectSchema.optional(), cursor: ProviderWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ProviderCountAggregateInputObjectSchema ]).optional() }).strict();