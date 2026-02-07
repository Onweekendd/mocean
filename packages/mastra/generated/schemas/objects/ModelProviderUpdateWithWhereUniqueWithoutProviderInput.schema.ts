import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './ModelProviderWhereUniqueInput.schema';
import { ModelProviderUpdateWithoutProviderInputObjectSchema as ModelProviderUpdateWithoutProviderInputObjectSchema } from './ModelProviderUpdateWithoutProviderInput.schema';
import { ModelProviderUncheckedUpdateWithoutProviderInputObjectSchema as ModelProviderUncheckedUpdateWithoutProviderInputObjectSchema } from './ModelProviderUncheckedUpdateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelProviderWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelProviderUpdateWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderUncheckedUpdateWithoutProviderInputObjectSchema)])
}).strict();
export const ModelProviderUpdateWithWhereUniqueWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelProviderUpdateWithWhereUniqueWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUpdateWithWhereUniqueWithoutProviderInput>;
export const ModelProviderUpdateWithWhereUniqueWithoutProviderInputObjectZodSchema = makeSchema();
