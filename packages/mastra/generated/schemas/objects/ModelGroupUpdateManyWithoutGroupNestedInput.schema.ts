import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupCreateWithoutGroupInputObjectSchema as ModelGroupCreateWithoutGroupInputObjectSchema } from './ModelGroupCreateWithoutGroupInput.schema';
import { ModelGroupUncheckedCreateWithoutGroupInputObjectSchema as ModelGroupUncheckedCreateWithoutGroupInputObjectSchema } from './ModelGroupUncheckedCreateWithoutGroupInput.schema';
import { ModelGroupCreateOrConnectWithoutGroupInputObjectSchema as ModelGroupCreateOrConnectWithoutGroupInputObjectSchema } from './ModelGroupCreateOrConnectWithoutGroupInput.schema';
import { ModelGroupUpsertWithWhereUniqueWithoutGroupInputObjectSchema as ModelGroupUpsertWithWhereUniqueWithoutGroupInputObjectSchema } from './ModelGroupUpsertWithWhereUniqueWithoutGroupInput.schema';
import { ModelGroupCreateManyGroupInputEnvelopeObjectSchema as ModelGroupCreateManyGroupInputEnvelopeObjectSchema } from './ModelGroupCreateManyGroupInputEnvelope.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupUpdateWithWhereUniqueWithoutGroupInputObjectSchema as ModelGroupUpdateWithWhereUniqueWithoutGroupInputObjectSchema } from './ModelGroupUpdateWithWhereUniqueWithoutGroupInput.schema';
import { ModelGroupUpdateManyWithWhereWithoutGroupInputObjectSchema as ModelGroupUpdateManyWithWhereWithoutGroupInputObjectSchema } from './ModelGroupUpdateManyWithWhereWithoutGroupInput.schema';
import { ModelGroupScalarWhereInputObjectSchema as ModelGroupScalarWhereInputObjectSchema } from './ModelGroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelGroupCreateWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupCreateWithoutGroupInputObjectSchema).array(), z.lazy(() => ModelGroupUncheckedCreateWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutGroupInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelGroupCreateOrConnectWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupCreateOrConnectWithoutGroupInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelGroupUpsertWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupUpsertWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelGroupCreateManyGroupInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelGroupUpdateWithWhereUniqueWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupUpdateWithWhereUniqueWithoutGroupInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelGroupUpdateManyWithWhereWithoutGroupInputObjectSchema), z.lazy(() => ModelGroupUpdateManyWithWhereWithoutGroupInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelGroupScalarWhereInputObjectSchema), z.lazy(() => ModelGroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelGroupUpdateManyWithoutGroupNestedInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateManyWithoutGroupNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateManyWithoutGroupNestedInput>;
export const ModelGroupUpdateManyWithoutGroupNestedInputObjectZodSchema = makeSchema();
