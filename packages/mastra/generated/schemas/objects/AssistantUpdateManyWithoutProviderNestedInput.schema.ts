import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutProviderInputObjectSchema as AssistantCreateWithoutProviderInputObjectSchema } from './AssistantCreateWithoutProviderInput.schema';
import { AssistantUncheckedCreateWithoutProviderInputObjectSchema as AssistantUncheckedCreateWithoutProviderInputObjectSchema } from './AssistantUncheckedCreateWithoutProviderInput.schema';
import { AssistantCreateOrConnectWithoutProviderInputObjectSchema as AssistantCreateOrConnectWithoutProviderInputObjectSchema } from './AssistantCreateOrConnectWithoutProviderInput.schema';
import { AssistantUpsertWithWhereUniqueWithoutProviderInputObjectSchema as AssistantUpsertWithWhereUniqueWithoutProviderInputObjectSchema } from './AssistantUpsertWithWhereUniqueWithoutProviderInput.schema';
import { AssistantCreateManyProviderInputEnvelopeObjectSchema as AssistantCreateManyProviderInputEnvelopeObjectSchema } from './AssistantCreateManyProviderInputEnvelope.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithWhereUniqueWithoutProviderInputObjectSchema as AssistantUpdateWithWhereUniqueWithoutProviderInputObjectSchema } from './AssistantUpdateWithWhereUniqueWithoutProviderInput.schema';
import { AssistantUpdateManyWithWhereWithoutProviderInputObjectSchema as AssistantUpdateManyWithWhereWithoutProviderInputObjectSchema } from './AssistantUpdateManyWithWhereWithoutProviderInput.schema';
import { AssistantScalarWhereInputObjectSchema as AssistantScalarWhereInputObjectSchema } from './AssistantScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutProviderInputObjectSchema), z.lazy(() => AssistantCreateWithoutProviderInputObjectSchema).array(), z.lazy(() => AssistantUncheckedCreateWithoutProviderInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutProviderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AssistantCreateOrConnectWithoutProviderInputObjectSchema), z.lazy(() => AssistantCreateOrConnectWithoutProviderInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AssistantUpsertWithWhereUniqueWithoutProviderInputObjectSchema), z.lazy(() => AssistantUpsertWithWhereUniqueWithoutProviderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AssistantCreateManyProviderInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AssistantUpdateWithWhereUniqueWithoutProviderInputObjectSchema), z.lazy(() => AssistantUpdateWithWhereUniqueWithoutProviderInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AssistantUpdateManyWithWhereWithoutProviderInputObjectSchema), z.lazy(() => AssistantUpdateManyWithWhereWithoutProviderInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AssistantScalarWhereInputObjectSchema), z.lazy(() => AssistantScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AssistantUpdateManyWithoutProviderNestedInputObjectSchema: z.ZodType<Prisma.AssistantUpdateManyWithoutProviderNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateManyWithoutProviderNestedInput>;
export const AssistantUpdateManyWithoutProviderNestedInputObjectZodSchema = makeSchema();
