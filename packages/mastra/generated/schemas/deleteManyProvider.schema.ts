import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './objects/ProviderWhereInput.schema';

export const ProviderDeleteManySchema: z.ZodType<Prisma.ProviderDeleteManyArgs> = z.object({ where: ProviderWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProviderDeleteManyArgs>;

export const ProviderDeleteManyZodSchema = z.object({ where: ProviderWhereInputObjectSchema.optional() }).strict();