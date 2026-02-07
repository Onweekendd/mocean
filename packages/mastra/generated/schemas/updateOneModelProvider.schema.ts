import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelProviderSelectObjectSchema as ModelProviderSelectObjectSchema } from './objects/ModelProviderSelect.schema';
import { ModelProviderIncludeObjectSchema as ModelProviderIncludeObjectSchema } from './objects/ModelProviderInclude.schema';
import { ModelProviderUpdateInputObjectSchema as ModelProviderUpdateInputObjectSchema } from './objects/ModelProviderUpdateInput.schema';
import { ModelProviderUncheckedUpdateInputObjectSchema as ModelProviderUncheckedUpdateInputObjectSchema } from './objects/ModelProviderUncheckedUpdateInput.schema';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './objects/ModelProviderWhereUniqueInput.schema';

export const ModelProviderUpdateOneSchema: z.ZodType<Prisma.ModelProviderUpdateArgs> = z.object({ select: ModelProviderSelectObjectSchema.optional(), include: ModelProviderIncludeObjectSchema.optional(), data: z.union([ModelProviderUpdateInputObjectSchema, ModelProviderUncheckedUpdateInputObjectSchema]), where: ModelProviderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelProviderUpdateArgs>;

export const ModelProviderUpdateOneZodSchema = z.object({ select: ModelProviderSelectObjectSchema.optional(), include: ModelProviderIncludeObjectSchema.optional(), data: z.union([ModelProviderUpdateInputObjectSchema, ModelProviderUncheckedUpdateInputObjectSchema]), where: ModelProviderWhereUniqueInputObjectSchema }).strict();