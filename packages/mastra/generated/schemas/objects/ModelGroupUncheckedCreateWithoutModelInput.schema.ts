import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  groupId: z.string(),
  providerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelGroupUncheckedCreateWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelGroupUncheckedCreateWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUncheckedCreateWithoutModelInput>;
export const ModelGroupUncheckedCreateWithoutModelInputObjectZodSchema = makeSchema();
