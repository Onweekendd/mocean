import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './AssistantSettingsWhereUniqueInput.schema';
import { AssistantSettingsCreateWithoutAssistantInputObjectSchema as AssistantSettingsCreateWithoutAssistantInputObjectSchema } from './AssistantSettingsCreateWithoutAssistantInput.schema';
import { AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema as AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutAssistantInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema)])
}).strict();
export const AssistantSettingsCreateOrConnectWithoutAssistantInputObjectSchema: z.ZodType<Prisma.AssistantSettingsCreateOrConnectWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsCreateOrConnectWithoutAssistantInput>;
export const AssistantSettingsCreateOrConnectWithoutAssistantInputObjectZodSchema = makeSchema();
