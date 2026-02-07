import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelSelectObjectSchema as ModelSelectObjectSchema } from './objects/ModelSelect.schema';
import { ModelIncludeObjectSchema as ModelIncludeObjectSchema } from './objects/ModelInclude.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './objects/ModelWhereUniqueInput.schema';

export const ModelFindUniqueSchema: z.ZodType<Prisma.ModelFindUniqueArgs> = z.object({ select: ModelSelectObjectSchema.optional(), include: ModelIncludeObjectSchema.optional(), where: ModelWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelFindUniqueArgs>;

export const ModelFindUniqueZodSchema = z.object({ select: ModelSelectObjectSchema.optional(), include: ModelIncludeObjectSchema.optional(), where: ModelWhereUniqueInputObjectSchema }).strict();