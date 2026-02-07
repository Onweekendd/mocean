import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  groupId: z.string(),
  providerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelGroupCreateManyModelInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateManyModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateManyModelInput>;
export const ModelGroupCreateManyModelInputObjectZodSchema = makeSchema();
