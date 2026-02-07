import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelGroupUpdateManyMutationInputObjectSchema as ModelGroupUpdateManyMutationInputObjectSchema } from './objects/ModelGroupUpdateManyMutationInput.schema';
import { ModelGroupWhereInputObjectSchema as ModelGroupWhereInputObjectSchema } from './objects/ModelGroupWhereInput.schema';

export const ModelGroupUpdateManySchema: z.ZodType<Prisma.ModelGroupUpdateManyArgs> = z.object({ data: ModelGroupUpdateManyMutationInputObjectSchema, where: ModelGroupWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelGroupUpdateManyArgs>;

export const ModelGroupUpdateManyZodSchema = z.object({ data: ModelGroupUpdateManyMutationInputObjectSchema, where: ModelGroupWhereInputObjectSchema.optional() }).strict();