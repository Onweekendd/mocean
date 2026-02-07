import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutDefaultModelInputObjectSchema as AssistantCreateWithoutDefaultModelInputObjectSchema } from './AssistantCreateWithoutDefaultModelInput.schema';
import { AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema as AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema } from './AssistantUncheckedCreateWithoutDefaultModelInput.schema';
import { AssistantCreateOrConnectWithoutDefaultModelInputObjectSchema as AssistantCreateOrConnectWithoutDefaultModelInputObjectSchema } from './AssistantCreateOrConnectWithoutDefaultModelInput.schema';
import { AssistantUpsertWithWhereUniqueWithoutDefaultModelInputObjectSchema as AssistantUpsertWithWhereUniqueWithoutDefaultModelInputObjectSchema } from './AssistantUpsertWithWhereUniqueWithoutDefaultModelInput.schema';
import { AssistantCreateManyDefaultModelInputEnvelopeObjectSchema as AssistantCreateManyDefaultModelInputEnvelopeObjectSchema } from './AssistantCreateManyDefaultModelInputEnvelope.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithWhereUniqueWithoutDefaultModelInputObjectSchema as AssistantUpdateWithWhereUniqueWithoutDefaultModelInputObjectSchema } from './AssistantUpdateWithWhereUniqueWithoutDefaultModelInput.schema';
import { AssistantUpdateManyWithWhereWithoutDefaultModelInputObjectSchema as AssistantUpdateManyWithWhereWithoutDefaultModelInputObjectSchema } from './AssistantUpdateManyWithWhereWithoutDefaultModelInput.schema';
import { AssistantScalarWhereInputObjectSchema as AssistantScalarWhereInputObjectSchema } from './AssistantScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantCreateWithoutDefaultModelInputObjectSchema).array(), z.lazy(() => AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AssistantCreateOrConnectWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantCreateOrConnectWithoutDefaultModelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AssistantUpsertWithWhereUniqueWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantUpsertWithWhereUniqueWithoutDefaultModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AssistantCreateManyDefaultModelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AssistantUpdateWithWhereUniqueWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantUpdateWithWhereUniqueWithoutDefaultModelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AssistantUpdateManyWithWhereWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantUpdateManyWithWhereWithoutDefaultModelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AssistantScalarWhereInputObjectSchema), z.lazy(() => AssistantScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AssistantUpdateManyWithoutDefaultModelNestedInputObjectSchema: z.ZodType<Prisma.AssistantUpdateManyWithoutDefaultModelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateManyWithoutDefaultModelNestedInput>;
export const AssistantUpdateManyWithoutDefaultModelNestedInputObjectZodSchema = makeSchema();
