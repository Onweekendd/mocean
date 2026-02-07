import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateNestedOneWithoutProvidersInputObjectSchema as ModelCreateNestedOneWithoutProvidersInputObjectSchema } from './ModelCreateNestedOneWithoutProvidersInput.schema'

const makeSchema = () => z.object({
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  model: z.lazy(() => ModelCreateNestedOneWithoutProvidersInputObjectSchema)
}).strict();
export const ModelProviderCreateWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelProviderCreateWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderCreateWithoutProviderInput>;
export const ModelProviderCreateWithoutProviderInputObjectZodSchema = makeSchema();
