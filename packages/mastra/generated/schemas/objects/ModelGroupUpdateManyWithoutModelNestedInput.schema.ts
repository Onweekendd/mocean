import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupCreateWithoutModelInputObjectSchema as ModelGroupCreateWithoutModelInputObjectSchema } from './ModelGroupCreateWithoutModelInput.schema';
import { ModelGroupUncheckedCreateWithoutModelInputObjectSchema as ModelGroupUncheckedCreateWithoutModelInputObjectSchema } from './ModelGroupUncheckedCreateWithoutModelInput.schema';
import { ModelGroupCreateOrConnectWithoutModelInputObjectSchema as ModelGroupCreateOrConnectWithoutModelInputObjectSchema } from './ModelGroupCreateOrConnectWithoutModelInput.schema';
import { ModelGroupUpsertWithWhereUniqueWithoutModelInputObjectSchema as ModelGroupUpsertWithWhereUniqueWithoutModelInputObjectSchema } from './ModelGroupUpsertWithWhereUniqueWithoutModelInput.schema';
import { ModelGroupCreateManyModelInputEnvelopeObjectSchema as ModelGroupCreateManyModelInputEnvelopeObjectSchema } from './ModelGroupCreateManyModelInputEnvelope.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupUpdateWithWhereUniqueWithoutModelInputObjectSchema as ModelGroupUpdateWithWhereUniqueWithoutModelInputObjectSchema } from './ModelGroupUpdateWithWhereUniqueWithoutModelInput.schema';
import { ModelGroupUpdateManyWithWhereWithoutModelInputObjectSchema as ModelGroupUpdateManyWithWhereWithoutModelInputObjectSchema } from './ModelGroupUpdateManyWithWhereWithoutModelInput.schema';
import { ModelGroupScalarWhereInputObjectSchema as ModelGroupScalarWhereInputObjectSchema } from './ModelGroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelGroupCreateWithoutModelInputObjectSchema), z.lazy(() => ModelGroupCreateWithoutModelInputObjectSchema).array(), z.lazy(() => ModelGroupUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelGroupCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => ModelGroupCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelGroupUpsertWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => ModelGroupUpsertWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelGroupCreateManyModelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelGroupUpdateWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => ModelGroupUpdateWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelGroupUpdateManyWithWhereWithoutModelInputObjectSchema), z.lazy(() => ModelGroupUpdateManyWithWhereWithoutModelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelGroupScalarWhereInputObjectSchema), z.lazy(() => ModelGroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelGroupUpdateManyWithoutModelNestedInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateManyWithoutModelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateManyWithoutModelNestedInput>;
export const ModelGroupUpdateManyWithoutModelNestedInputObjectZodSchema = makeSchema();
