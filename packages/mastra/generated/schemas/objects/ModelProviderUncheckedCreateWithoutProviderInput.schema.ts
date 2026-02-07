import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelProviderUncheckedCreateWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelProviderUncheckedCreateWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUncheckedCreateWithoutProviderInput>;
export const ModelProviderUncheckedCreateWithoutProviderInputObjectZodSchema = makeSchema();
