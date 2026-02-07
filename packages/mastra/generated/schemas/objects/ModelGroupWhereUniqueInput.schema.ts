import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupModelIdProviderIdCompoundUniqueInputObjectSchema as ModelGroupModelIdProviderIdCompoundUniqueInputObjectSchema } from './ModelGroupModelIdProviderIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  modelId_providerId: z.lazy(() => ModelGroupModelIdProviderIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ModelGroupWhereUniqueInputObjectSchema: z.ZodType<Prisma.ModelGroupWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupWhereUniqueInput>;
export const ModelGroupWhereUniqueInputObjectZodSchema = makeSchema();
