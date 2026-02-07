import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProviderSelectObjectSchema as ProviderSelectObjectSchema } from './objects/ProviderSelect.schema';
import { ProviderIncludeObjectSchema as ProviderIncludeObjectSchema } from './objects/ProviderInclude.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './objects/ProviderWhereUniqueInput.schema';
import { ProviderCreateInputObjectSchema as ProviderCreateInputObjectSchema } from './objects/ProviderCreateInput.schema';
import { ProviderUncheckedCreateInputObjectSchema as ProviderUncheckedCreateInputObjectSchema } from './objects/ProviderUncheckedCreateInput.schema';
import { ProviderUpdateInputObjectSchema as ProviderUpdateInputObjectSchema } from './objects/ProviderUpdateInput.schema';
import { ProviderUncheckedUpdateInputObjectSchema as ProviderUncheckedUpdateInputObjectSchema } from './objects/ProviderUncheckedUpdateInput.schema';

export const ProviderUpsertOneSchema: z.ZodType<Prisma.ProviderUpsertArgs> = z.object({ select: ProviderSelectObjectSchema.optional(), include: ProviderIncludeObjectSchema.optional(), where: ProviderWhereUniqueInputObjectSchema, create: z.union([ ProviderCreateInputObjectSchema, ProviderUncheckedCreateInputObjectSchema ]), update: z.union([ ProviderUpdateInputObjectSchema, ProviderUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProviderUpsertArgs>;

export const ProviderUpsertOneZodSchema = z.object({ select: ProviderSelectObjectSchema.optional(), include: ProviderIncludeObjectSchema.optional(), where: ProviderWhereUniqueInputObjectSchema, create: z.union([ ProviderCreateInputObjectSchema, ProviderUncheckedCreateInputObjectSchema ]), update: z.union([ ProviderUpdateInputObjectSchema, ProviderUncheckedUpdateInputObjectSchema ]) }).strict();