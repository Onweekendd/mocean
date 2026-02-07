import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelId: z.string(),
  providerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelGroupUncheckedCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.ModelGroupUncheckedCreateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUncheckedCreateWithoutGroupInput>;
export const ModelGroupUncheckedCreateWithoutGroupInputObjectZodSchema = makeSchema();
