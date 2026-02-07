import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelProviderSelectObjectSchema as ModelProviderSelectObjectSchema } from './objects/ModelProviderSelect.schema';
import { ModelProviderIncludeObjectSchema as ModelProviderIncludeObjectSchema } from './objects/ModelProviderInclude.schema';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './objects/ModelProviderWhereUniqueInput.schema';

export const ModelProviderFindUniqueSchema: z.ZodType<Prisma.ModelProviderFindUniqueArgs> = z.object({ select: ModelProviderSelectObjectSchema.optional(), include: ModelProviderIncludeObjectSchema.optional(), where: ModelProviderWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelProviderFindUniqueArgs>;

export const ModelProviderFindUniqueZodSchema = z.object({ select: ModelProviderSelectObjectSchema.optional(), include: ModelProviderIncludeObjectSchema.optional(), where: ModelProviderWhereUniqueInputObjectSchema }).strict();