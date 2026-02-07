import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupUpdateWithoutProviderInputObjectSchema as ModelGroupUpdateWithoutProviderInputObjectSchema } from './ModelGroupUpdateWithoutProviderInput.schema';
import { ModelGroupUncheckedUpdateWithoutProviderInputObjectSchema as ModelGroupUncheckedUpdateWithoutProviderInputObjectSchema } from './ModelGroupUncheckedUpdateWithoutProviderInput.schema';
import { ModelGroupCreateWithoutProviderInputObjectSchema as ModelGroupCreateWithoutProviderInputObjectSchema } from './ModelGroupCreateWithoutProviderInput.schema';
import { ModelGroupUncheckedCreateWithoutProviderInputObjectSchema as ModelGroupUncheckedCreateWithoutProviderInputObjectSchema } from './ModelGroupUncheckedCreateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelGroupUpdateWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupUncheckedUpdateWithoutProviderInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelGroupCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutProviderInputObjectSchema)])
}).strict();
export const ModelGroupUpsertWithWhereUniqueWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelGroupUpsertWithWhereUniqueWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpsertWithWhereUniqueWithoutProviderInput>;
export const ModelGroupUpsertWithWhereUniqueWithoutProviderInputObjectZodSchema = makeSchema();
