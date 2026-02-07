import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantCreateWithoutProviderInputObjectSchema as AssistantCreateWithoutProviderInputObjectSchema } from './AssistantCreateWithoutProviderInput.schema';
import { AssistantUncheckedCreateWithoutProviderInputObjectSchema as AssistantUncheckedCreateWithoutProviderInputObjectSchema } from './AssistantUncheckedCreateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AssistantCreateWithoutProviderInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutProviderInputObjectSchema)])
}).strict();
export const AssistantCreateOrConnectWithoutProviderInputObjectSchema: z.ZodType<Prisma.AssistantCreateOrConnectWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateOrConnectWithoutProviderInput>;
export const AssistantCreateOrConnectWithoutProviderInputObjectZodSchema = makeSchema();
