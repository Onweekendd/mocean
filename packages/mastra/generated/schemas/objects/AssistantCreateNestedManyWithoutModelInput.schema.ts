import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutModelInputObjectSchema as AssistantCreateWithoutModelInputObjectSchema } from './AssistantCreateWithoutModelInput.schema';
import { AssistantUncheckedCreateWithoutModelInputObjectSchema as AssistantUncheckedCreateWithoutModelInputObjectSchema } from './AssistantUncheckedCreateWithoutModelInput.schema';
import { AssistantCreateOrConnectWithoutModelInputObjectSchema as AssistantCreateOrConnectWithoutModelInputObjectSchema } from './AssistantCreateOrConnectWithoutModelInput.schema';
import { AssistantCreateManyModelInputEnvelopeObjectSchema as AssistantCreateManyModelInputEnvelopeObjectSchema } from './AssistantCreateManyModelInputEnvelope.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutModelInputObjectSchema), z.lazy(() => AssistantCreateWithoutModelInputObjectSchema).array(), z.lazy(() => AssistantUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AssistantCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => AssistantCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AssistantCreateManyModelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AssistantCreateNestedManyWithoutModelInputObjectSchema: z.ZodType<Prisma.AssistantCreateNestedManyWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateNestedManyWithoutModelInput>;
export const AssistantCreateNestedManyWithoutModelInputObjectZodSchema = makeSchema();
