import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsUpdateWithoutAgentInputObjectSchema as AssistantSettingsUpdateWithoutAgentInputObjectSchema } from './AssistantSettingsUpdateWithoutAgentInput.schema';
import { AssistantSettingsUncheckedUpdateWithoutAgentInputObjectSchema as AssistantSettingsUncheckedUpdateWithoutAgentInputObjectSchema } from './AssistantSettingsUncheckedUpdateWithoutAgentInput.schema';
import { AssistantSettingsCreateWithoutAgentInputObjectSchema as AssistantSettingsCreateWithoutAgentInputObjectSchema } from './AssistantSettingsCreateWithoutAgentInput.schema';
import { AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema as AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutAgentInput.schema';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './AssistantSettingsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AssistantSettingsUpdateWithoutAgentInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedUpdateWithoutAgentInputObjectSchema)]),
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutAgentInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema)]),
  where: z.lazy(() => AssistantSettingsWhereInputObjectSchema).optional()
}).strict();
export const AssistantSettingsUpsertWithoutAgentInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUpsertWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUpsertWithoutAgentInput>;
export const AssistantSettingsUpsertWithoutAgentInputObjectZodSchema = makeSchema();
