import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutModelInputObjectSchema as AssistantCreateWithoutModelInputObjectSchema } from './AssistantCreateWithoutModelInput.schema';
import { AssistantUncheckedCreateWithoutModelInputObjectSchema as AssistantUncheckedCreateWithoutModelInputObjectSchema } from './AssistantUncheckedCreateWithoutModelInput.schema';
import { AssistantCreateOrConnectWithoutModelInputObjectSchema as AssistantCreateOrConnectWithoutModelInputObjectSchema } from './AssistantCreateOrConnectWithoutModelInput.schema';
import { AssistantUpsertWithWhereUniqueWithoutModelInputObjectSchema as AssistantUpsertWithWhereUniqueWithoutModelInputObjectSchema } from './AssistantUpsertWithWhereUniqueWithoutModelInput.schema';
import { AssistantCreateManyModelInputEnvelopeObjectSchema as AssistantCreateManyModelInputEnvelopeObjectSchema } from './AssistantCreateManyModelInputEnvelope.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithWhereUniqueWithoutModelInputObjectSchema as AssistantUpdateWithWhereUniqueWithoutModelInputObjectSchema } from './AssistantUpdateWithWhereUniqueWithoutModelInput.schema';
import { AssistantUpdateManyWithWhereWithoutModelInputObjectSchema as AssistantUpdateManyWithWhereWithoutModelInputObjectSchema } from './AssistantUpdateManyWithWhereWithoutModelInput.schema';
import { AssistantScalarWhereInputObjectSchema as AssistantScalarWhereInputObjectSchema } from './AssistantScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutModelInputObjectSchema), z.lazy(() => AssistantCreateWithoutModelInputObjectSchema).array(), z.lazy(() => AssistantUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AssistantCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => AssistantCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AssistantUpsertWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => AssistantUpsertWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AssistantCreateManyModelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AssistantUpdateWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => AssistantUpdateWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AssistantUpdateManyWithWhereWithoutModelInputObjectSchema), z.lazy(() => AssistantUpdateManyWithWhereWithoutModelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AssistantScalarWhereInputObjectSchema), z.lazy(() => AssistantScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AssistantUncheckedUpdateManyWithoutModelNestedInputObjectSchema: z.ZodType<Prisma.AssistantUncheckedUpdateManyWithoutModelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUncheckedUpdateManyWithoutModelNestedInput>;
export const AssistantUncheckedUpdateManyWithoutModelNestedInputObjectZodSchema = makeSchema();
