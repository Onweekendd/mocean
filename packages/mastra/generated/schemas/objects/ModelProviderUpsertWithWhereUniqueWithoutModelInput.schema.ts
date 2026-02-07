import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './ModelProviderWhereUniqueInput.schema';
import { ModelProviderUpdateWithoutModelInputObjectSchema as ModelProviderUpdateWithoutModelInputObjectSchema } from './ModelProviderUpdateWithoutModelInput.schema';
import { ModelProviderUncheckedUpdateWithoutModelInputObjectSchema as ModelProviderUncheckedUpdateWithoutModelInputObjectSchema } from './ModelProviderUncheckedUpdateWithoutModelInput.schema';
import { ModelProviderCreateWithoutModelInputObjectSchema as ModelProviderCreateWithoutModelInputObjectSchema } from './ModelProviderCreateWithoutModelInput.schema';
import { ModelProviderUncheckedCreateWithoutModelInputObjectSchema as ModelProviderUncheckedCreateWithoutModelInputObjectSchema } from './ModelProviderUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelProviderWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelProviderUpdateWithoutModelInputObjectSchema), z.lazy(() => ModelProviderUncheckedUpdateWithoutModelInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelProviderCreateWithoutModelInputObjectSchema), z.lazy(() => ModelProviderUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const ModelProviderUpsertWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelProviderUpsertWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUpsertWithWhereUniqueWithoutModelInput>;
export const ModelProviderUpsertWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
