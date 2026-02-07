import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutDefaultModelInputObjectSchema as AssistantCreateWithoutDefaultModelInputObjectSchema } from './AssistantCreateWithoutDefaultModelInput.schema';
import { AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema as AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema } from './AssistantUncheckedCreateWithoutDefaultModelInput.schema';
import { AssistantCreateOrConnectWithoutDefaultModelInputObjectSchema as AssistantCreateOrConnectWithoutDefaultModelInputObjectSchema } from './AssistantCreateOrConnectWithoutDefaultModelInput.schema';
import { AssistantCreateManyDefaultModelInputEnvelopeObjectSchema as AssistantCreateManyDefaultModelInputEnvelopeObjectSchema } from './AssistantCreateManyDefaultModelInputEnvelope.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantCreateWithoutDefaultModelInputObjectSchema).array(), z.lazy(() => AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AssistantCreateOrConnectWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantCreateOrConnectWithoutDefaultModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AssistantCreateManyDefaultModelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AssistantUncheckedCreateNestedManyWithoutDefaultModelInputObjectSchema: z.ZodType<Prisma.AssistantUncheckedCreateNestedManyWithoutDefaultModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUncheckedCreateNestedManyWithoutDefaultModelInput>;
export const AssistantUncheckedCreateNestedManyWithoutDefaultModelInputObjectZodSchema = makeSchema();
