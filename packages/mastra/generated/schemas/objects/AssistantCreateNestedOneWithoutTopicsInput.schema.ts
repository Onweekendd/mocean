import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutTopicsInputObjectSchema as AssistantCreateWithoutTopicsInputObjectSchema } from './AssistantCreateWithoutTopicsInput.schema';
import { AssistantUncheckedCreateWithoutTopicsInputObjectSchema as AssistantUncheckedCreateWithoutTopicsInputObjectSchema } from './AssistantUncheckedCreateWithoutTopicsInput.schema';
import { AssistantCreateOrConnectWithoutTopicsInputObjectSchema as AssistantCreateOrConnectWithoutTopicsInputObjectSchema } from './AssistantCreateOrConnectWithoutTopicsInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutTopicsInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutTopicsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AssistantCreateOrConnectWithoutTopicsInputObjectSchema).optional(),
  connect: z.lazy(() => AssistantWhereUniqueInputObjectSchema).optional()
}).strict();
export const AssistantCreateNestedOneWithoutTopicsInputObjectSchema: z.ZodType<Prisma.AssistantCreateNestedOneWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateNestedOneWithoutTopicsInput>;
export const AssistantCreateNestedOneWithoutTopicsInputObjectZodSchema = makeSchema();
