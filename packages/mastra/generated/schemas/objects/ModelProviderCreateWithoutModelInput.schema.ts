import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCreateNestedOneWithoutModelsInputObjectSchema as ProviderCreateNestedOneWithoutModelsInputObjectSchema } from './ProviderCreateNestedOneWithoutModelsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutModelsInputObjectSchema)
}).strict();
export const ModelProviderCreateWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelProviderCreateWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderCreateWithoutModelInput>;
export const ModelProviderCreateWithoutModelInputObjectZodSchema = makeSchema();
