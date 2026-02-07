import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsCreateWithoutDefaultModelInputObjectSchema as AssistantSettingsCreateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsCreateWithoutDefaultModelInput.schema';
import { AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema as AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutDefaultModelInput.schema';
import { AssistantSettingsCreateOrConnectWithoutDefaultModelInputObjectSchema as AssistantSettingsCreateOrConnectWithoutDefaultModelInputObjectSchema } from './AssistantSettingsCreateOrConnectWithoutDefaultModelInput.schema';
import { AssistantSettingsCreateManyDefaultModelInputEnvelopeObjectSchema as AssistantSettingsCreateManyDefaultModelInputEnvelopeObjectSchema } from './AssistantSettingsCreateManyDefaultModelInputEnvelope.schema';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './AssistantSettingsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsCreateWithoutDefaultModelInputObjectSchema).array(), z.lazy(() => AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AssistantSettingsCreateOrConnectWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsCreateOrConnectWithoutDefaultModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AssistantSettingsCreateManyDefaultModelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema), z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AssistantSettingsUncheckedCreateNestedManyWithoutDefaultModelInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUncheckedCreateNestedManyWithoutDefaultModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUncheckedCreateNestedManyWithoutDefaultModelInput>;
export const AssistantSettingsUncheckedCreateNestedManyWithoutDefaultModelInputObjectZodSchema = makeSchema();
