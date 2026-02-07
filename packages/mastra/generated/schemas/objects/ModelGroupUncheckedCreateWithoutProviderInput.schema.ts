import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelId: z.string(),
  groupId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelGroupUncheckedCreateWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelGroupUncheckedCreateWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUncheckedCreateWithoutProviderInput>;
export const ModelGroupUncheckedCreateWithoutProviderInputObjectZodSchema = makeSchema();
