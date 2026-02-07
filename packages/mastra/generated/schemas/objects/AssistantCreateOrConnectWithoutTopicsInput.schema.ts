import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantCreateWithoutTopicsInputObjectSchema as AssistantCreateWithoutTopicsInputObjectSchema } from './AssistantCreateWithoutTopicsInput.schema';
import { AssistantUncheckedCreateWithoutTopicsInputObjectSchema as AssistantUncheckedCreateWithoutTopicsInputObjectSchema } from './AssistantUncheckedCreateWithoutTopicsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AssistantCreateWithoutTopicsInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutTopicsInputObjectSchema)])
}).strict();
export const AssistantCreateOrConnectWithoutTopicsInputObjectSchema: z.ZodType<Prisma.AssistantCreateOrConnectWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateOrConnectWithoutTopicsInput>;
export const AssistantCreateOrConnectWithoutTopicsInputObjectZodSchema = makeSchema();
