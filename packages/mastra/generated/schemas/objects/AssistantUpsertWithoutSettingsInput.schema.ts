import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantUpdateWithoutSettingsInputObjectSchema as AssistantUpdateWithoutSettingsInputObjectSchema } from './AssistantUpdateWithoutSettingsInput.schema';
import { AssistantUncheckedUpdateWithoutSettingsInputObjectSchema as AssistantUncheckedUpdateWithoutSettingsInputObjectSchema } from './AssistantUncheckedUpdateWithoutSettingsInput.schema';
import { AssistantCreateWithoutSettingsInputObjectSchema as AssistantCreateWithoutSettingsInputObjectSchema } from './AssistantCreateWithoutSettingsInput.schema';
import { AssistantUncheckedCreateWithoutSettingsInputObjectSchema as AssistantUncheckedCreateWithoutSettingsInputObjectSchema } from './AssistantUncheckedCreateWithoutSettingsInput.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AssistantUpdateWithoutSettingsInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutSettingsInputObjectSchema)]),
  create: z.union([z.lazy(() => AssistantCreateWithoutSettingsInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutSettingsInputObjectSchema)]),
  where: z.lazy(() => AssistantWhereInputObjectSchema).optional()
}).strict();
export const AssistantUpsertWithoutSettingsInputObjectSchema: z.ZodType<Prisma.AssistantUpsertWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpsertWithoutSettingsInput>;
export const AssistantUpsertWithoutSettingsInputObjectZodSchema = makeSchema();
