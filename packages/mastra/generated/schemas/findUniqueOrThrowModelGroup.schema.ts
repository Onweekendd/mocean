import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelGroupSelectObjectSchema as ModelGroupSelectObjectSchema } from './objects/ModelGroupSelect.schema';
import { ModelGroupIncludeObjectSchema as ModelGroupIncludeObjectSchema } from './objects/ModelGroupInclude.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './objects/ModelGroupWhereUniqueInput.schema';

export const ModelGroupFindUniqueOrThrowSchema: z.ZodType<Prisma.ModelGroupFindUniqueOrThrowArgs> = z.object({ select: ModelGroupSelectObjectSchema.optional(), include: ModelGroupIncludeObjectSchema.optional(), where: ModelGroupWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ModelGroupFindUniqueOrThrowArgs>;

export const ModelGroupFindUniqueOrThrowZodSchema = z.object({ select: ModelGroupSelectObjectSchema.optional(), include: ModelGroupIncludeObjectSchema.optional(), where: ModelGroupWhereUniqueInputObjectSchema }).strict();