import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelUpdateManyMutationInputObjectSchema as ModelUpdateManyMutationInputObjectSchema } from './objects/ModelUpdateManyMutationInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './objects/ModelWhereInput.schema';

export const ModelUpdateManySchema: z.ZodType<Prisma.ModelUpdateManyArgs> = z.object({ data: ModelUpdateManyMutationInputObjectSchema, where: ModelWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelUpdateManyArgs>;

export const ModelUpdateManyZodSchema = z.object({ data: ModelUpdateManyMutationInputObjectSchema, where: ModelWhereInputObjectSchema.optional() }).strict();