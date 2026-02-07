import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProviderSelectObjectSchema as ProviderSelectObjectSchema } from './objects/ProviderSelect.schema';
import { ProviderIncludeObjectSchema as ProviderIncludeObjectSchema } from './objects/ProviderInclude.schema';
import { ProviderCreateInputObjectSchema as ProviderCreateInputObjectSchema } from './objects/ProviderCreateInput.schema';
import { ProviderUncheckedCreateInputObjectSchema as ProviderUncheckedCreateInputObjectSchema } from './objects/ProviderUncheckedCreateInput.schema';

export const ProviderCreateOneSchema: z.ZodType<Prisma.ProviderCreateArgs> = z.object({ select: ProviderSelectObjectSchema.optional(), include: ProviderIncludeObjectSchema.optional(), data: z.union([ProviderCreateInputObjectSchema, ProviderUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ProviderCreateArgs>;

export const ProviderCreateOneZodSchema = z.object({ select: ProviderSelectObjectSchema.optional(), include: ProviderIncludeObjectSchema.optional(), data: z.union([ProviderCreateInputObjectSchema, ProviderUncheckedCreateInputObjectSchema]) }).strict();