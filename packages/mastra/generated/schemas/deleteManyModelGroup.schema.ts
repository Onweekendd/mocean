import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelGroupWhereInputObjectSchema as ModelGroupWhereInputObjectSchema } from './objects/ModelGroupWhereInput.schema';

export const ModelGroupDeleteManySchema: z.ZodType<Prisma.ModelGroupDeleteManyArgs> = z.object({ where: ModelGroupWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ModelGroupDeleteManyArgs>;

export const ModelGroupDeleteManyZodSchema = z.object({ where: ModelGroupWhereInputObjectSchema.optional() }).strict();