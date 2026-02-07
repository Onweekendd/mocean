import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantCreateWithoutDefaultModelInputObjectSchema as AssistantCreateWithoutDefaultModelInputObjectSchema } from './AssistantCreateWithoutDefaultModelInput.schema';
import { AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema as AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema } from './AssistantUncheckedCreateWithoutDefaultModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AssistantCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema)])
}).strict();
export const AssistantCreateOrConnectWithoutDefaultModelInputObjectSchema: z.ZodType<Prisma.AssistantCreateOrConnectWithoutDefaultModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateOrConnectWithoutDefaultModelInput>;
export const AssistantCreateOrConnectWithoutDefaultModelInputObjectZodSchema = makeSchema();
