import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelId: z.string(),
  groupId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelGroupCreateManyProviderInputObjectSchema: z.ZodType<Prisma.ModelGroupCreateManyProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupCreateManyProviderInput>;
export const ModelGroupCreateManyProviderInputObjectZodSchema = makeSchema();
