import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupUpdateWithoutModelInputObjectSchema as ModelGroupUpdateWithoutModelInputObjectSchema } from './ModelGroupUpdateWithoutModelInput.schema';
import { ModelGroupUncheckedUpdateWithoutModelInputObjectSchema as ModelGroupUncheckedUpdateWithoutModelInputObjectSchema } from './ModelGroupUncheckedUpdateWithoutModelInput.schema';
import { ModelGroupCreateWithoutModelInputObjectSchema as ModelGroupCreateWithoutModelInputObjectSchema } from './ModelGroupCreateWithoutModelInput.schema';
import { ModelGroupUncheckedCreateWithoutModelInputObjectSchema as ModelGroupUncheckedCreateWithoutModelInputObjectSchema } from './ModelGroupUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelGroupUpdateWithoutModelInputObjectSchema), z.lazy(() => ModelGroupUncheckedUpdateWithoutModelInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelGroupCreateWithoutModelInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const ModelGroupUpsertWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelGroupUpsertWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpsertWithWhereUniqueWithoutModelInput>;
export const ModelGroupUpsertWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
