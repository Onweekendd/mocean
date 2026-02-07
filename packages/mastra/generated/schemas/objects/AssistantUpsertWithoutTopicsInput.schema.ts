import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantUpdateWithoutTopicsInputObjectSchema as AssistantUpdateWithoutTopicsInputObjectSchema } from './AssistantUpdateWithoutTopicsInput.schema';
import { AssistantUncheckedUpdateWithoutTopicsInputObjectSchema as AssistantUncheckedUpdateWithoutTopicsInputObjectSchema } from './AssistantUncheckedUpdateWithoutTopicsInput.schema';
import { AssistantCreateWithoutTopicsInputObjectSchema as AssistantCreateWithoutTopicsInputObjectSchema } from './AssistantCreateWithoutTopicsInput.schema';
import { AssistantUncheckedCreateWithoutTopicsInputObjectSchema as AssistantUncheckedCreateWithoutTopicsInputObjectSchema } from './AssistantUncheckedCreateWithoutTopicsInput.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AssistantUpdateWithoutTopicsInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutTopicsInputObjectSchema)]),
  create: z.union([z.lazy(() => AssistantCreateWithoutTopicsInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutTopicsInputObjectSchema)]),
  where: z.lazy(() => AssistantWhereInputObjectSchema).optional()
}).strict();
export const AssistantUpsertWithoutTopicsInputObjectSchema: z.ZodType<Prisma.AssistantUpsertWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpsertWithoutTopicsInput>;
export const AssistantUpsertWithoutTopicsInputObjectZodSchema = makeSchema();
