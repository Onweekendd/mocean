import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutProviderInputObjectSchema as AssistantCreateWithoutProviderInputObjectSchema } from './AssistantCreateWithoutProviderInput.schema';
import { AssistantUncheckedCreateWithoutProviderInputObjectSchema as AssistantUncheckedCreateWithoutProviderInputObjectSchema } from './AssistantUncheckedCreateWithoutProviderInput.schema';
import { AssistantCreateOrConnectWithoutProviderInputObjectSchema as AssistantCreateOrConnectWithoutProviderInputObjectSchema } from './AssistantCreateOrConnectWithoutProviderInput.schema';
import { AssistantCreateManyProviderInputEnvelopeObjectSchema as AssistantCreateManyProviderInputEnvelopeObjectSchema } from './AssistantCreateManyProviderInputEnvelope.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutProviderInputObjectSchema), z.lazy(() => AssistantCreateWithoutProviderInputObjectSchema).array(), z.lazy(() => AssistantUncheckedCreateWithoutProviderInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutProviderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AssistantCreateOrConnectWithoutProviderInputObjectSchema), z.lazy(() => AssistantCreateOrConnectWithoutProviderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AssistantCreateManyProviderInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AssistantWhereUniqueInputObjectSchema), z.lazy(() => AssistantWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AssistantCreateNestedManyWithoutProviderInputObjectSchema: z.ZodType<Prisma.AssistantCreateNestedManyWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateNestedManyWithoutProviderInput>;
export const AssistantCreateNestedManyWithoutProviderInputObjectZodSchema = makeSchema();
