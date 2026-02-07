import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelId: z.string(),
  providerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelProviderCreateManyInputObjectSchema: z.ZodType<Prisma.ModelProviderCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderCreateManyInput>;
export const ModelProviderCreateManyInputObjectZodSchema = makeSchema();
