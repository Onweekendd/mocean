import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelProviderSelectObjectSchema as ModelProviderSelectObjectSchema } from './objects/ModelProviderSelect.schema';
import { ModelProviderIncludeObjectSchema as ModelProviderIncludeObjectSchema } from './objects/ModelProviderInclude.schema';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './objects/ModelProviderWhereUniqueInput.schema';
import { ModelProviderCreateInputObjectSchema as ModelProviderCreateInputObjectSchema } from './objects/ModelProviderCreateInput.schema';
import { ModelProviderUncheckedCreateInputObjectSchema as ModelProviderUncheckedCreateInputObjectSchema } from './objects/ModelProviderUncheckedCreateInput.schema';
import { ModelProviderUpdateInputObjectSchema as ModelProviderUpdateInputObjectSchema } from './objects/ModelProviderUpdateInput.schema';
import { ModelProviderUncheckedUpdateInputObjectSchema as ModelProviderUncheckedUpdateInputObjectSchema } from './objects/ModelProviderUncheckedUpdateInput.schema';

export const ModelProviderUpsertOneSchema: z.ZodType<Prisma.ModelProviderUpsertArgs> = z.object({ select: ModelProviderSelectObjectSchema.optional(), include: ModelProviderIncludeObjectSchema.optional(), where: ModelProviderWhereUniqueInputObjectSchema, create: z.union([ ModelProviderCreateInputObjectSchema, ModelProviderUncheckedCreateInputObjectSchema ]), update: z.union([ ModelProviderUpdateInputObjectSchema, ModelProviderUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ModelProviderUpsertArgs>;

export const ModelProviderUpsertOneZodSchema = z.object({ select: ModelProviderSelectObjectSchema.optional(), include: ModelProviderIncludeObjectSchema.optional(), where: ModelProviderWhereUniqueInputObjectSchema, create: z.union([ ModelProviderCreateInputObjectSchema, ModelProviderUncheckedCreateInputObjectSchema ]), update: z.union([ ModelProviderUpdateInputObjectSchema, ModelProviderUncheckedUpdateInputObjectSchema ]) }).strict();