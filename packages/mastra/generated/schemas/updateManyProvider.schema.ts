import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ProviderUpdateManyMutationInputObjectSchema as ProviderUpdateManyMutationInputObjectSchema } from './objects/ProviderUpdateManyMutationInput.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './objects/ProviderWhereInput.schema';

export const ProviderUpdateManySchema: z.ZodType<Prisma.ProviderUpdateManyArgs> = z.object({ data: ProviderUpdateManyMutationInputObjectSchema, where: ProviderWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProviderUpdateManyArgs>;

export const ProviderUpdateManyZodSchema = z.object({ data: ProviderUpdateManyMutationInputObjectSchema, where: ProviderWhereInputObjectSchema.optional() }).strict();