import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProviderSelectObjectSchema as ProviderSelectObjectSchema } from './objects/ProviderSelect.schema';
import { ProviderIncludeObjectSchema as ProviderIncludeObjectSchema } from './objects/ProviderInclude.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './objects/ProviderWhereUniqueInput.schema';

export const ProviderFindUniqueSchema: z.ZodType<Prisma.ProviderFindUniqueArgs> = z.object({ select: ProviderSelectObjectSchema.optional(), include: ProviderIncludeObjectSchema.optional(), where: ProviderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProviderFindUniqueArgs>;

export const ProviderFindUniqueZodSchema = z.object({ select: ProviderSelectObjectSchema.optional(), include: ProviderIncludeObjectSchema.optional(), where: ProviderWhereUniqueInputObjectSchema }).strict();