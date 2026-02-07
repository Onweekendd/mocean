import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelGroupSelectObjectSchema as ModelGroupSelectObjectSchema } from './objects/ModelGroupSelect.schema';
import { ModelGroupIncludeObjectSchema as ModelGroupIncludeObjectSchema } from './objects/ModelGroupInclude.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './objects/ModelGroupWhereUniqueInput.schema';
import { ModelGroupCreateInputObjectSchema as ModelGroupCreateInputObjectSchema } from './objects/ModelGroupCreateInput.schema';
import { ModelGroupUncheckedCreateInputObjectSchema as ModelGroupUncheckedCreateInputObjectSchema } from './objects/ModelGroupUncheckedCreateInput.schema';
import { ModelGroupUpdateInputObjectSchema as ModelGroupUpdateInputObjectSchema } from './objects/ModelGroupUpdateInput.schema';
import { ModelGroupUncheckedUpdateInputObjectSchema as ModelGroupUncheckedUpdateInputObjectSchema } from './objects/ModelGroupUncheckedUpdateInput.schema';

export const ModelGroupUpsertOneSchema: z.ZodType<Prisma.ModelGroupUpsertArgs> = z.object({ select: ModelGroupSelectObjectSchema.optional(), include: ModelGroupIncludeObjectSchema.optional(), where: ModelGroupWhereUniqueInputObjectSchema, create: z.union([ ModelGroupCreateInputObjectSchema, ModelGroupUncheckedCreateInputObjectSchema ]), update: z.union([ ModelGroupUpdateInputObjectSchema, ModelGroupUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ModelGroupUpsertArgs>;

export const ModelGroupUpsertOneZodSchema = z.object({ select: ModelGroupSelectObjectSchema.optional(), include: ModelGroupIncludeObjectSchema.optional(), where: ModelGroupWhereUniqueInputObjectSchema, create: z.union([ ModelGroupCreateInputObjectSchema, ModelGroupUncheckedCreateInputObjectSchema ]), update: z.union([ ModelGroupUpdateInputObjectSchema, ModelGroupUncheckedUpdateInputObjectSchema ]) }).strict();