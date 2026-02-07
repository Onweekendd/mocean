import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsUpdateWithoutAssistantInputObjectSchema as AssistantSettingsUpdateWithoutAssistantInputObjectSchema } from './AssistantSettingsUpdateWithoutAssistantInput.schema';
import { AssistantSettingsUncheckedUpdateWithoutAssistantInputObjectSchema as AssistantSettingsUncheckedUpdateWithoutAssistantInputObjectSchema } from './AssistantSettingsUncheckedUpdateWithoutAssistantInput.schema';
import { AssistantSettingsCreateWithoutAssistantInputObjectSchema as AssistantSettingsCreateWithoutAssistantInputObjectSchema } from './AssistantSettingsCreateWithoutAssistantInput.schema';
import { AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema as AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutAssistantInput.schema';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './AssistantSettingsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AssistantSettingsUpdateWithoutAssistantInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedUpdateWithoutAssistantInputObjectSchema)]),
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutAssistantInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema)]),
  where: z.lazy(() => AssistantSettingsWhereInputObjectSchema).optional()
}).strict();
export const AssistantSettingsUpsertWithoutAssistantInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUpsertWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUpsertWithoutAssistantInput>;
export const AssistantSettingsUpsertWithoutAssistantInputObjectZodSchema = makeSchema();
