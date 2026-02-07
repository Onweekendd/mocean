import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsCreateWithoutAgentInputObjectSchema as AssistantSettingsCreateWithoutAgentInputObjectSchema } from './AssistantSettingsCreateWithoutAgentInput.schema';
import { AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema as AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutAgentInput.schema';
import { AssistantSettingsCreateOrConnectWithoutAgentInputObjectSchema as AssistantSettingsCreateOrConnectWithoutAgentInputObjectSchema } from './AssistantSettingsCreateOrConnectWithoutAgentInput.schema';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './AssistantSettingsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutAgentInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AssistantSettingsCreateOrConnectWithoutAgentInputObjectSchema).optional(),
  connect: z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema).optional()
}).strict();
export const AssistantSettingsCreateNestedOneWithoutAgentInputObjectSchema: z.ZodType<Prisma.AssistantSettingsCreateNestedOneWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsCreateNestedOneWithoutAgentInput>;
export const AssistantSettingsCreateNestedOneWithoutAgentInputObjectZodSchema = makeSchema();
