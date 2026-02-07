import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelId: z.string(),
  providerId: z.string()
}).strict();
export const ModelProviderModelIdProviderIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ModelProviderModelIdProviderIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderModelIdProviderIdCompoundUniqueInput>;
export const ModelProviderModelIdProviderIdCompoundUniqueInputObjectZodSchema = makeSchema();
