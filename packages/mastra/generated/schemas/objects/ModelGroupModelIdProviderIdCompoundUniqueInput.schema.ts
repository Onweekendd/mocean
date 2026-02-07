import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  modelId: z.string(),
  providerId: z.string()
}).strict();
export const ModelGroupModelIdProviderIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ModelGroupModelIdProviderIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupModelIdProviderIdCompoundUniqueInput>;
export const ModelGroupModelIdProviderIdCompoundUniqueInputObjectZodSchema = makeSchema();
