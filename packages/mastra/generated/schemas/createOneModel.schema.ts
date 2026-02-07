import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelSelectObjectSchema as ModelSelectObjectSchema } from './objects/ModelSelect.schema';
import { ModelIncludeObjectSchema as ModelIncludeObjectSchema } from './objects/ModelInclude.schema';
import { ModelCreateInputObjectSchema as ModelCreateInputObjectSchema } from './objects/ModelCreateInput.schema';
import { ModelUncheckedCreateInputObjectSchema as ModelUncheckedCreateInputObjectSchema } from './objects/ModelUncheckedCreateInput.schema';

export const ModelCreateOneSchema: z.ZodType<Prisma.ModelCreateArgs> = z.object({ select: ModelSelectObjectSchema.optional(), include: ModelIncludeObjectSchema.optional(), data: z.union([ModelCreateInputObjectSchema, ModelUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ModelCreateArgs>;

export const ModelCreateOneZodSchema = z.object({ select: ModelSelectObjectSchema.optional(), include: ModelIncludeObjectSchema.optional(), data: z.union([ModelCreateInputObjectSchema, ModelUncheckedCreateInputObjectSchema]) }).strict();