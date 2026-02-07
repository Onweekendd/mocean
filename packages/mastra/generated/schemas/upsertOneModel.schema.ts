import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelSelectObjectSchema as ModelSelectObjectSchema } from './objects/ModelSelect.schema';
import { ModelIncludeObjectSchema as ModelIncludeObjectSchema } from './objects/ModelInclude.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './objects/ModelWhereUniqueInput.schema';
import { ModelCreateInputObjectSchema as ModelCreateInputObjectSchema } from './objects/ModelCreateInput.schema';
import { ModelUncheckedCreateInputObjectSchema as ModelUncheckedCreateInputObjectSchema } from './objects/ModelUncheckedCreateInput.schema';
import { ModelUpdateInputObjectSchema as ModelUpdateInputObjectSchema } from './objects/ModelUpdateInput.schema';
import { ModelUncheckedUpdateInputObjectSchema as ModelUncheckedUpdateInputObjectSchema } from './objects/ModelUncheckedUpdateInput.schema';

export const ModelUpsertOneSchema: z.ZodType<Prisma.ModelUpsertArgs> = z.object({ select: ModelSelectObjectSchema.optional(), include: ModelIncludeObjectSchema.optional(), where: ModelWhereUniqueInputObjectSchema, create: z.union([ ModelCreateInputObjectSchema, ModelUncheckedCreateInputObjectSchema ]), update: z.union([ ModelUpdateInputObjectSchema, ModelUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ModelUpsertArgs>;

export const ModelUpsertOneZodSchema = z.object({ select: ModelSelectObjectSchema.optional(), include: ModelIncludeObjectSchema.optional(), where: ModelWhereUniqueInputObjectSchema, create: z.union([ ModelCreateInputObjectSchema, ModelUncheckedCreateInputObjectSchema ]), update: z.union([ ModelUpdateInputObjectSchema, ModelUncheckedUpdateInputObjectSchema ]) }).strict();