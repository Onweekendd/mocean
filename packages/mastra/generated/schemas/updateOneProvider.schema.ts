import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProviderSelectObjectSchema as ProviderSelectObjectSchema } from './objects/ProviderSelect.schema';
import { ProviderIncludeObjectSchema as ProviderIncludeObjectSchema } from './objects/ProviderInclude.schema';
import { ProviderUpdateInputObjectSchema as ProviderUpdateInputObjectSchema } from './objects/ProviderUpdateInput.schema';
import { ProviderUncheckedUpdateInputObjectSchema as ProviderUncheckedUpdateInputObjectSchema } from './objects/ProviderUncheckedUpdateInput.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './objects/ProviderWhereUniqueInput.schema';

export const ProviderUpdateOneSchema: z.ZodType<Prisma.ProviderUpdateArgs> = z.object({ select: ProviderSelectObjectSchema.optional(), include: ProviderIncludeObjectSchema.optional(), data: z.union([ProviderUpdateInputObjectSchema, ProviderUncheckedUpdateInputObjectSchema]), where: ProviderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProviderUpdateArgs>;

export const ProviderUpdateOneZodSchema = z.object({ select: ProviderSelectObjectSchema.optional(), include: ProviderIncludeObjectSchema.optional(), data: z.union([ProviderUpdateInputObjectSchema, ProviderUncheckedUpdateInputObjectSchema]), where: ProviderWhereUniqueInputObjectSchema }).strict();