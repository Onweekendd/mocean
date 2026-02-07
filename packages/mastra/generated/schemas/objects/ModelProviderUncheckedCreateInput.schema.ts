import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelId: z.string(),
  providerId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const ModelProviderUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ModelProviderUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUncheckedCreateInput>;
export const ModelProviderUncheckedCreateInputObjectZodSchema = makeSchema();
