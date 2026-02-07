import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelSelectObjectSchema as ModelSelectObjectSchema } from './objects/ModelSelect.schema';
import { ModelIncludeObjectSchema as ModelIncludeObjectSchema } from './objects/ModelInclude.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './objects/ModelWhereUniqueInput.schema';

export const ModelDeleteOneSchema: z.ZodType<Prisma.ModelDeleteArgs> = z.object({ select: ModelSelectObjectSchema.optional(), include: ModelIncludeObjectSchema.optional(), where: ModelWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelDeleteArgs>;

export const ModelDeleteOneZodSchema = z.object({ select: ModelSelectObjectSchema.optional(), include: ModelIncludeObjectSchema.optional(), where: ModelWhereUniqueInputObjectSchema }).strict();