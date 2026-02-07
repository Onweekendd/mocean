import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './AssistantSettingsWhereUniqueInput.schema';
import { AssistantSettingsCreateWithoutAgentInputObjectSchema as AssistantSettingsCreateWithoutAgentInputObjectSchema } from './AssistantSettingsCreateWithoutAgentInput.schema';
import { AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema as AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutAgentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutAgentInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema)])
}).strict();
export const AssistantSettingsCreateOrConnectWithoutAgentInputObjectSchema: z.ZodType<Prisma.AssistantSettingsCreateOrConnectWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsCreateOrConnectWithoutAgentInput>;
export const AssistantSettingsCreateOrConnectWithoutAgentInputObjectZodSchema = makeSchema();
