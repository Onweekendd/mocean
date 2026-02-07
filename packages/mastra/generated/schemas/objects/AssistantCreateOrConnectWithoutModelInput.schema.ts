import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantCreateWithoutModelInputObjectSchema as AssistantCreateWithoutModelInputObjectSchema } from './AssistantCreateWithoutModelInput.schema';
import { AssistantUncheckedCreateWithoutModelInputObjectSchema as AssistantUncheckedCreateWithoutModelInputObjectSchema } from './AssistantUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AssistantCreateWithoutModelInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const AssistantCreateOrConnectWithoutModelInputObjectSchema: z.ZodType<Prisma.AssistantCreateOrConnectWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateOrConnectWithoutModelInput>;
export const AssistantCreateOrConnectWithoutModelInputObjectZodSchema = makeSchema();
