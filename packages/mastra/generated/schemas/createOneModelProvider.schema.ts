import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelProviderSelectObjectSchema as ModelProviderSelectObjectSchema } from './objects/ModelProviderSelect.schema';
import { ModelProviderIncludeObjectSchema as ModelProviderIncludeObjectSchema } from './objects/ModelProviderInclude.schema';
import { ModelProviderCreateInputObjectSchema as ModelProviderCreateInputObjectSchema } from './objects/ModelProviderCreateInput.schema';
import { ModelProviderUncheckedCreateInputObjectSchema as ModelProviderUncheckedCreateInputObjectSchema } from './objects/ModelProviderUncheckedCreateInput.schema';

export const ModelProviderCreateOneSchema: z.ZodType<Prisma.ModelProviderCreateArgs> = z.object({ select: ModelProviderSelectObjectSchema.optional(), include: ModelProviderIncludeObjectSchema.optional(), data: z.union([ModelProviderCreateInputObjectSchema, ModelProviderUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ModelProviderCreateArgs>;

export const ModelProviderCreateOneZodSchema = z.object({ select: ModelProviderSelectObjectSchema.optional(), include: ModelProviderIncludeObjectSchema.optional(), data: z.union([ModelProviderCreateInputObjectSchema, ModelProviderUncheckedCreateInputObjectSchema]) }).strict();