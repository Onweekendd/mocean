import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupCreateWithoutProviderInputObjectSchema as ModelGroupCreateWithoutProviderInputObjectSchema } from './ModelGroupCreateWithoutProviderInput.schema';
import { ModelGroupUncheckedCreateWithoutProviderInputObjectSchema as ModelGroupUncheckedCreateWithoutProviderInputObjectSchema } from './ModelGroupUncheckedCreateWithoutProviderInput.schema';
import { ModelGroupCreateOrConnectWithoutProviderInputObjectSchema as ModelGroupCreateOrConnectWithoutProviderInputObjectSchema } from './ModelGroupCreateOrConnectWithoutProviderInput.schema';
import { ModelGroupUpsertWithWhereUniqueWithoutProviderInputObjectSchema as ModelGroupUpsertWithWhereUniqueWithoutProviderInputObjectSchema } from './ModelGroupUpsertWithWhereUniqueWithoutProviderInput.schema';
import { ModelGroupCreateManyProviderInputEnvelopeObjectSchema as ModelGroupCreateManyProviderInputEnvelopeObjectSchema } from './ModelGroupCreateManyProviderInputEnvelope.schema';
import { ModelGroupWhereUniqueInputObjectSchema as ModelGroupWhereUniqueInputObjectSchema } from './ModelGroupWhereUniqueInput.schema';
import { ModelGroupUpdateWithWhereUniqueWithoutProviderInputObjectSchema as ModelGroupUpdateWithWhereUniqueWithoutProviderInputObjectSchema } from './ModelGroupUpdateWithWhereUniqueWithoutProviderInput.schema';
import { ModelGroupUpdateManyWithWhereWithoutProviderInputObjectSchema as ModelGroupUpdateManyWithWhereWithoutProviderInputObjectSchema } from './ModelGroupUpdateManyWithWhereWithoutProviderInput.schema';
import { ModelGroupScalarWhereInputObjectSchema as ModelGroupScalarWhereInputObjectSchema } from './ModelGroupScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelGroupCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupCreateWithoutProviderInputObjectSchema).array(), z.lazy(() => ModelGroupUncheckedCreateWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupUncheckedCreateWithoutProviderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ModelGroupCreateOrConnectWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupCreateOrConnectWithoutProviderInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ModelGroupUpsertWithWhereUniqueWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupUpsertWithWhereUniqueWithoutProviderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ModelGroupCreateManyProviderInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ModelGroupWhereUniqueInputObjectSchema), z.lazy(() => ModelGroupWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ModelGroupUpdateWithWhereUniqueWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupUpdateWithWhereUniqueWithoutProviderInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ModelGroupUpdateManyWithWhereWithoutProviderInputObjectSchema), z.lazy(() => ModelGroupUpdateManyWithWhereWithoutProviderInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ModelGroupScalarWhereInputObjectSchema), z.lazy(() => ModelGroupScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ModelGroupUpdateManyWithoutProviderNestedInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateManyWithoutProviderNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateManyWithoutProviderNestedInput>;
export const ModelGroupUpdateManyWithoutProviderNestedInputObjectZodSchema = makeSchema();
