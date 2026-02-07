import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelProviderUpdateManyMutationInputObjectSchema as ModelProviderUpdateManyMutationInputObjectSchema } from './objects/ModelProviderUpdateManyMutationInput.schema';
import { ModelProviderWhereInputObjectSchema as ModelProviderWhereInputObjectSchema } from './objects/ModelProviderWhereInput.schema';

export const ModelProviderUpdateManySchema: z.ZodType<Prisma.ModelProviderUpdateManyArgs> = z.object({ data: ModelProviderUpdateManyMutationInputObjectSchema, where: ModelProviderWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelProviderUpdateManyArgs>;

export const ModelProviderUpdateManyZodSchema = z.object({ data: ModelProviderUpdateManyMutationInputObjectSchema, where: ModelProviderWhereInputObjectSchema.optional() }).strict();