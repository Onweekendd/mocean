import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelId: z.string(),
  groupId: z.string(),
  providerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelGroupCreateManyInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateManyInput>;
export const ModelGroupCreateManyInputObjectZodSchema = makeSchema();
