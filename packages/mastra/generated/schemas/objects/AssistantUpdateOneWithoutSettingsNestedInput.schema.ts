import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutSettingsInputObjectSchema as AssistantCreateWithoutSettingsInputObjectSchema } from './AssistantCreateWithoutSettingsInput.schema';
import { AssistantUncheckedCreateWithoutSettingsInputObjectSchema as AssistantUncheckedCreateWithoutSettingsInputObjectSchema } from './AssistantUncheckedCreateWithoutSettingsInput.schema';
import { AssistantCreateOrConnectWithoutSettingsInputObjectSchema as AssistantCreateOrConnectWithoutSettingsInputObjectSchema } from './AssistantCreateOrConnectWithoutSettingsInput.schema';
import { AssistantUpsertWithoutSettingsInputObjectSchema as AssistantUpsertWithoutSettingsInputObjectSchema } from './AssistantUpsertWithoutSettingsInput.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateToOneWithWhereWithoutSettingsInputObjectSchema as AssistantUpdateToOneWithWhereWithoutSettingsInputObjectSchema } from './AssistantUpdateToOneWithWhereWithoutSettingsInput.schema';
import { AssistantUpdateWithoutSettingsInputObjectSchema as AssistantUpdateWithoutSettingsInputObjectSchema } from './AssistantUpdateWithoutSettingsInput.schema';
import { AssistantUncheckedUpdateWithoutSettingsInputObjectSchema as AssistantUncheckedUpdateWithoutSettingsInputObjectSchema } from './AssistantUncheckedUpdateWithoutSettingsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutSettingsInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AssistantCreateOrConnectWithoutSettingsInputObjectSchema).optional(),
  upsert: z.lazy(() => AssistantUpsertWithoutSettingsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AssistantWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AssistantWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AssistantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AssistantUpdateToOneWithWhereWithoutSettingsInputObjectSchema), z.lazy(() => AssistantUpdateWithoutSettingsInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutSettingsInputObjectSchema)]).optional()
}).strict();
export const AssistantUpdateOneWithoutSettingsNestedInputObjectSchema: z.ZodType<Prisma.AssistantUpdateOneWithoutSettingsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateOneWithoutSettingsNestedInput>;
export const AssistantUpdateOneWithoutSettingsNestedInputObjectZodSchema = makeSchema();
