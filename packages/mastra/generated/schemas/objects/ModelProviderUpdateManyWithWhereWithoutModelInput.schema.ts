import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderScalarWhereInputObjectSchema as ModelProviderScalarWhereInputObjectSchema } from './ModelProviderScalarWhereInput.schema';
import { ModelProviderUpdateManyMutationInputObjectSchema as ModelProviderUpdateManyMutationInputObjectSchema } from './ModelProviderUpdateManyMutationInput.schema';
import { ModelProviderUncheckedUpdateManyWithoutModelInputObjectSchema as ModelProviderUncheckedUpdateManyWithoutModelInputObjectSchema } from './ModelProviderUncheckedUpdateManyWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelProviderScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelProviderUpdateManyMutationInputObjectSchema), z.lazy(() => ModelProviderUncheckedUpdateManyWithoutModelInputObjectSchema)])
}).strict();
export const ModelProviderUpdateManyWithWhereWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelProviderUpdateManyWithWhereWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUpdateManyWithWhereWithoutModelInput>;
export const ModelProviderUpdateManyWithWhereWithoutModelInputObjectZodSchema = makeSchema();
