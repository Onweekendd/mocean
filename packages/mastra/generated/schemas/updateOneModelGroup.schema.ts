import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelGroupSelectObjectSchema as ModelGroupSelectObjectSchema } from './objects/ModelGroupSelect.schema';
import { ModelGroupIncludeObjectSchema as ModelGroupIncludeObjectSchema } from './objects/ModelGroupInclude.schema';
import { ModelGroupUpdateInputObjectSchema as ModelGroupUpdateInputObjectSchema } from './objects/ModelGroupUpdateInput.schema';
import { ModelGroupUncheckedUpdateInputObjectSchema as ModelGroupUncheckedUpdateInputObjectSchema } from './objects/ModelGroupUncheckedUpdateInput.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './objects/ModelGroupWhereUniqueInput.schema';

export const ModelGroupUpdateOneSchema: z.ZodType<Prisma.ModelGroupUpdateArgs> = z.object({ select: ModelGroupSelectObjectSchema.optional(), include: ModelGroupIncludeObjectSchema.optional(), data: z.union([ModelGroupUpdateInputObjectSchema, ModelGroupUncheckedUpdateInputObjectSchema]), where: ModelGroupWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelGroupUpdateArgs>;

export const ModelGroupUpdateOneZodSchema = z.object({ select: ModelGroupSelectObjectSchema.optional(), include: ModelGroupIncludeObjectSchema.optional(), data: z.union([ModelGroupUpdateInputObjectSchema, ModelGroupUncheckedUpdateInputObjectSchema]), where: ModelGroupWhereUniqueInputObjectSchema }).strict();