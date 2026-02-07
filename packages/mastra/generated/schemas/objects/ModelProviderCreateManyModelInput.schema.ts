import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  providerId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ModelProviderCreateManyModelInputObjectSchema: z.ZodType<Prisma.ModelProviderCreateManyModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderCreateManyModelInput>;
export const ModelProviderCreateManyModelInputObjectZodSchema = makeSchema();
