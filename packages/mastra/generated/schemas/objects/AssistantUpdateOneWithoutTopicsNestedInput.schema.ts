import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutTopicsInputObjectSchema as AssistantCreateWithoutTopicsInputObjectSchema } from './AssistantCreateWithoutTopicsInput.schema';
import { AssistantUncheckedCreateWithoutTopicsInputObjectSchema as AssistantUncheckedCreateWithoutTopicsInputObjectSchema } from './AssistantUncheckedCreateWithoutTopicsInput.schema';
import { AssistantCreateOrConnectWithoutTopicsInputObjectSchema as AssistantCreateOrConnectWithoutTopicsInputObjectSchema } from './AssistantCreateOrConnectWithoutTopicsInput.schema';
import { AssistantUpsertWithoutTopicsInputObjectSchema as AssistantUpsertWithoutTopicsInputObjectSchema } from './AssistantUpsertWithoutTopicsInput.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateToOneWithWhereWithoutTopicsInputObjectSchema as AssistantUpdateToOneWithWhereWithoutTopicsInputObjectSchema } from './AssistantUpdateToOneWithWhereWithoutTopicsInput.schema';
import { AssistantUpdateWithoutTopicsInputObjectSchema as AssistantUpdateWithoutTopicsInputObjectSchema } from './AssistantUpdateWithoutTopicsInput.schema';
import { AssistantUncheckedUpdateWithoutTopicsInputObjectSchema as AssistantUncheckedUpdateWithoutTopicsInputObjectSchema } from './AssistantUncheckedUpdateWithoutTopicsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutTopicsInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutTopicsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AssistantCreateOrConnectWithoutTopicsInputObjectSchema).optional(),
  upsert: z.lazy(() => AssistantUpsertWithoutTopicsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AssistantWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AssistantWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AssistantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AssistantUpdateToOneWithWhereWithoutTopicsInputObjectSchema), z.lazy(() => AssistantUpdateWithoutTopicsInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutTopicsInputObjectSchema)]).optional()
}).strict();
export const AssistantUpdateOneWithoutTopicsNestedInputObjectSchema: z.ZodType<Prisma.AssistantUpdateOneWithoutTopicsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateOneWithoutTopicsNestedInput>;
export const AssistantUpdateOneWithoutTopicsNestedInputObjectZodSchema = makeSchema();
