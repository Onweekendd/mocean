import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderModelIdProviderIdCompoundUniqueInputObjectSchema as ModelProviderModelIdProviderIdCompoundUniqueInputObjectSchema } from './ModelProviderModelIdProviderIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  modelId_providerId: z.lazy(() => ModelProviderModelIdProviderIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const ModelProviderWhereUniqueInputObjectSchema: z.ZodType<Prisma.ModelProviderWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderWhereUniqueInput>;
export const ModelProviderWhereUniqueInputObjectZodSchema = makeSchema();
