import type { Prisma } from '../prisma/client';
import * as z from 'zod';
import { ModelGroupSelectObjectSchema as ModelGroupSelectObjectSchema } from './objects/ModelGroupSelect.schema';
import { ModelGroupIncludeObjectSchema as ModelGroupIncludeObjectSchema } from './objects/ModelGroupInclude.schema';
import { ModelGroupCreateInputObjectSchema as ModelGroupCreateInputObjectSchema } from './objects/ModelGroupCreateInput.schema';
import { ModelGroupUncheckedCreateInputObjectSchema as ModelGroupUncheckedCreateInputObjectSchema } from './objects/ModelGroupUncheckedCreateInput.schema';

export const ModelGroupCreateOneSchema: z.ZodType<Prisma.ModelGroupCreateArgs> = z.object({ select: ModelGroupSelectObjectSchema.optional(), include: ModelGroupIncludeObjectSchema.optional(), data: z.union([ModelGroupCreateInputObjectSchema, ModelGroupUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ModelGroupCreateArgs>;

export const ModelGroupCreateOneZodSchema = z.object({ select: ModelGroupSelectObjectSchema.optional(), include: ModelGroupIncludeObjectSchema.optional(), data: z.union([ModelGroupCreateInputObjectSchema, ModelGroupUncheckedCreateInputObjectSchema]) }).strict();