import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderScalarWhereInputObjectSchema as ModelProviderScalarWhereInputObjectSchema } from './ModelProviderScalarWhereInput.schema';
import { ModelProviderUpdateManyMutationInputObjectSchema as ModelProviderUpdateManyMutationInputObjectSchema } from './ModelProviderUpdateManyMutationInput.schema';
import { ModelProviderUncheckedUpdateManyWithoutProviderInputObjectSchema as ModelProviderUncheckedUpdateManyWithoutProviderInputObjectSchema } from './ModelProviderUncheckedUpdateManyWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelProviderScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelProviderUpdateManyMutationInputObjectSchema), z.lazy(() => ModelProviderUncheckedUpdateManyWithoutProviderInputObjectSchema)])
}).strict();
export const ModelProviderUpdateManyWithWhereWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelProviderUpdateManyWithWhereWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUpdateManyWithWhereWithoutProviderInput>;
export const ModelProviderUpdateManyWithWhereWithoutProviderInputObjectZodSchema = makeSchema();
