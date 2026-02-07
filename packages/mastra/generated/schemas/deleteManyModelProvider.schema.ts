import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelProviderWhereInputObjectSchema as ModelProviderWhereInputObjectSchema } from './objects/ModelProviderWhereInput.schema';

export const ModelProviderDeleteManySchema: z.ZodType<Prisma.ModelProviderDeleteManyArgs> = z.object({ where: ModelProviderWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelProviderDeleteManyArgs>;

export const ModelProviderDeleteManyZodSchema = z.object({ where: ModelProviderWhereInputObjectSchema.optional() }).strict();