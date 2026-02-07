import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelSelectObjectSchema as ModelSelectObjectSchema } from './objects/ModelSelect.schema';
import { ModelIncludeObjectSchema as ModelIncludeObjectSchema } from './objects/ModelInclude.schema';
import { ModelUpdateInputObjectSchema as ModelUpdateInputObjectSchema } from './objects/ModelUpdateInput.schema';
import { ModelUncheckedUpdateInputObjectSchema as ModelUncheckedUpdateInputObjectSchema } from './objects/ModelUncheckedUpdateInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './objects/ModelWhereUniqueInput.schema';

export const ModelUpdateOneSchema: z.ZodType<Prisma.ModelUpdateArgs> = z.object({ select: ModelSelectObjectSchema.optional(), include: ModelIncludeObjectSchema.optional(), data: z.union([ModelUpdateInputObjectSchema, ModelUncheckedUpdateInputObjectSchema]), where: ModelWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelUpdateArgs>;

export const ModelUpdateOneZodSchema = z.object({ select: ModelSelectObjectSchema.optional(), include: ModelIncludeObjectSchema.optional(), data: z.union([ModelUpdateInputObjectSchema, ModelUncheckedUpdateInputObjectSchema]), where: ModelWhereUniqueInputObjectSchema }).strict();