import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupUpdateWithoutGroupInputObjectSchema as ModelGroupUpdateWithoutGroupInputObjectSchema } from './ModelGroupUpdateWithoutGroupInput.schema';
import { ModelGroupUncheckedUpdateWithoutGroupInputObjectSchema as ModelGroupUncheckedUpdateWithoutGroupInputObjectSchema } from './ModelGroupUncheckedUpdateWithoutGroupInput.schema';
import { ModelGroupCreateWithoutGroupInputObjectSchema as ModelGroupCreateWithoutGroupInputObjectSchema } from './ModelGroupCreateWithoutGroupInput.schema';
import { ModelGroupUncheckedCreateWithoutGroupInputObjectSchema as ModelGroupUncheckedCreateWithoutGroupInputObjectSchema } from './ModelGroupUncheckedCreateWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ModelGroupUpdateWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupUncheckedUpdateWithoutGroupInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelGroupCreateWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutGroupInputObjectSchema)])
}).strict();
export const ModelGroupUpsertWithWhereUniqueWithoutGroupInputObjectSchema: z.ZodType<Prisma.ModelGroupUpsertWithWhereUniqueWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpsertWithWhereUniqueWithoutGroupInput>;
export const ModelGroupUpsertWithWhereUniqueWithoutGroupInputObjectZodSchema = makeSchema();
