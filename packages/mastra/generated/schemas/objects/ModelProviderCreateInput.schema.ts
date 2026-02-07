import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateNestedOneWithoutProvidersInputObjectSchema as ModelCreateNestedOneWithoutProvidersInputObjectSchema } from './ModelCreateNestedOneWithoutProvidersInput.schema';
import { ProviderCreateNestedOneWithoutModelsInputObjectSchema as ProviderCreateNestedOneWithoutModelsInputObjectSchema } from './ProviderCreateNestedOneWithoutModelsInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  model: z.lazy(() => ModelCreateNestedOneWithoutProvidersInputObjectSchema),
  provider: z.lazy(() => ProviderCreateNestedOneWithoutModelsInputObjectSchema)
}).strict();
export const ModelProviderCreateInputObjectSchema: z.ZodType<Prisma.ModelProviderCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderCreateInput>;
export const ModelProviderCreateInputObjectZodSchema = makeSchema();
