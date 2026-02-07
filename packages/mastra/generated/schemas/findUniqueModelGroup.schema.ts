import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelGroupSelectObjectSchema as ModelGroupSelectObjectSchema } from './objects/ModelGroupSelect.schema';
import { ModelGroupIncludeObjectSchema as ModelGroupIncludeObjectSchema } from './objects/ModelGroupInclude.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './objects/ModelGroupWhereUniqueInput.schema';

export const ModelGroupFindUniqueSchema: z.ZodType<Prisma.ModelGroupFindUniqueArgs> = z.object({ select: ModelGroupSelectObjectSchema.optional(), include: ModelGroupIncludeObjectSchema.optional(), where: ModelGroupWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelGroupFindUniqueArgs>;

export const ModelGroupFindUniqueZodSchema = z.object({ select: ModelGroupSelectObjectSchema.optional(), include: ModelGroupIncludeObjectSchema.optional(), where: ModelGroupWhereUniqueInputObjectSchema }).strict();