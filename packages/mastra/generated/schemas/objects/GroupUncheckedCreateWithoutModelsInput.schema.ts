import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  providerId: z.string(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const GroupUncheckedCreateWithoutModelsInputObjectSchema: z.ZodType<Prisma.GroupUncheckedCreateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUncheckedCreateWithoutModelsInput>;
export const GroupUncheckedCreateWithoutModelsInputObjectZodSchema = makeSchema();
