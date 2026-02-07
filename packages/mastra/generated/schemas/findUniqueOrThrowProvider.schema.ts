import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProviderSelectObjectSchema as ProviderSelectObjectSchema } from './objects/ProviderSelect.schema';
import { ProviderIncludeObjectSchema as ProviderIncludeObjectSchema } from './objects/ProviderInclude.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './objects/ProviderWhereUniqueInput.schema';

export const ProviderFindUniqueOrThrowSchema: z.ZodType<Prisma.ProviderFindUniqueOrThrowArgs> = z.object({ select: ProviderSelectObjectSchema.optional(), include: ProviderIncludeObjectSchema.optional(), where: ProviderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProviderFindUniqueOrThrowArgs>;

export const ProviderFindUniqueOrThrowZodSchema = z.object({ select: ProviderSelectObjectSchema.optional(), include: ProviderIncludeObjectSchema.optional(), where: ProviderWhereUniqueInputObjectSchema }).strict();