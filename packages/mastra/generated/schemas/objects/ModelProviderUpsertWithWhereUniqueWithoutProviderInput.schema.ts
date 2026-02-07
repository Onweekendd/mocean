import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelProviderWhereUniqueInputObjectSchema as ModelProviderWhereUniqueInputObjectSchema } from './ModelProviderWhereUniqueInput.schema';
import { ModelProviderUpdateWithoutProviderInputObjectSchema as ModelProviderUpdateWithoutProviderInputObjectSchema } from './ModelProviderUpdateWithoutProviderInput.schema';
import { ModelProviderUncheckedUpdateWithoutProviderInputObjectSchema as ModelProviderUncheckedUpdateWithoutProviderInputObjectSchema } from './ModelProviderUncheckedUpdateWithoutProviderInput.schema';
import { ModelProviderCreateWithoutProviderInputObjectSchema as ModelProviderCreateWithoutProviderInputObjectSchema } from './ModelProviderCreateWithoutProviderInput.schema';
import { ModelProviderUncheckedCreateWithoutProviderInputObjectSchema as ModelProviderUncheckedCreateWithoutProviderInputObjectSchema } from './ModelProviderUncheckedCreateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelProviderWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelProviderUpdateWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderUncheckedUpdateWithoutProviderInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelProviderCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelProviderUncheckedCreateWithoutProviderInputObjectSchema)])
}).strict();
export const ModelProviderUpsertWithWhereUniqueWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelProviderUpsertWithWhereUniqueWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelProviderUpsertWithWhereUniqueWithoutProviderInput>;
export const ModelProviderUpsertWithWhereUniqueWithoutProviderInputObjectZodSchema = makeSchema();
