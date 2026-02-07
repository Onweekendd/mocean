import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsCreateWithoutDefaultModelInputObjectSchema as AssistantSettingsCreateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsCreateWithoutDefaultModelInput.schema';
import { AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema as AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutDefaultModelInput.schema';
import { AssistantSettingsCreateOrConnectWithoutDefaultModelInputObjectSchema as AssistantSettingsCreateOrConnectWithoutDefaultModelInputObjectSchema } from './AssistantSettingsCreateOrConnectWithoutDefaultModelInput.schema';
import { AssistantSettingsUpsertWithWhereUniqueWithoutDefaultModelInputObjectSchema as AssistantSettingsUpsertWithWhereUniqueWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUpsertWithWhereUniqueWithoutDefaultModelInput.schema';
import { AssistantSettingsCreateManyDefaultModelInputEnvelopeObjectSchema as AssistantSettingsCreateManyDefaultModelInputEnvelopeObjectSchema } from './AssistantSettingsCreateManyDefaultModelInputEnvelope.schema';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './AssistantSettingsWhereUniqueInput.schema';
import { AssistantSettingsUpdateWithWhereUniqueWithoutDefaultModelInputObjectSchema as AssistantSettingsUpdateWithWhereUniqueWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUpdateWithWhereUniqueWithoutDefaultModelInput.schema';
import { AssistantSettingsUpdateManyWithWhereWithoutDefaultModelInputObjectSchema as AssistantSettingsUpdateManyWithWhereWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUpdateManyWithWhereWithoutDefaultModelInput.schema';
import { AssistantSettingsScalarWhereInputObjectSchema as AssistantSettingsScalarWhereInputObjectSchema } from './AssistantSettingsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsCreateWithoutDefaultModelInputObjectSchema).array(), z.lazy(() => AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AssistantSettingsCreateOrConnectWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsCreateOrConnectWithoutDefaultModelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AssistantSettingsUpsertWithWhereUniqueWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsUpsertWithWhereUniqueWithoutDefaultModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AssistantSettingsCreateManyDefaultModelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema), z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema), z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema), z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema), z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AssistantSettingsUpdateWithWhereUniqueWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsUpdateWithWhereUniqueWithoutDefaultModelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AssistantSettingsUpdateManyWithWhereWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsUpdateManyWithWhereWithoutDefaultModelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AssistantSettingsScalarWhereInputObjectSchema), z.lazy(() => AssistantSettingsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AssistantSettingsUncheckedUpdateManyWithoutDefaultModelNestedInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUncheckedUpdateManyWithoutDefaultModelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUncheckedUpdateManyWithoutDefaultModelNestedInput>;
export const AssistantSettingsUncheckedUpdateManyWithoutDefaultModelNestedInputObjectZodSchema = makeSchema();
