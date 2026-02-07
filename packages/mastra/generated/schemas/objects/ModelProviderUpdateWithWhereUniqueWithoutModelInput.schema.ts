import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './ModelProviderWhereUniqueInput.schema';
import { ModelProviderUpdateWithoutModelInputObjectSchema as ModelProviderUpdateWithoutModelInputObjectSchema } from './ModelProviderUpdateWithoutModelInput.schema';
import { ModelProviderUncheckedUpdateWithoutModelInputObjectSchema as ModelProviderUncheckedUpdateWithoutModelInputObjectSchema } from './ModelProviderUncheckedUpdateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelProviderWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ModelProviderUpdateWithoutModelInputObjectSchema), z.lazy(() => ModelProviderUncheckedUpdateWithoutModelInputObjectSchema)])
}).strict();
export const ModelProviderUpdateWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelProviderUpdateWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUpdateWithWhereUniqueWithoutModelInput>;
export const ModelProviderUpdateWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
