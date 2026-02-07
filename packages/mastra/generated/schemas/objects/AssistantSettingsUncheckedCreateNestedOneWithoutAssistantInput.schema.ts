import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsCreateWithoutAssistantInputObjectSchema as AssistantSettingsCreateWithoutAssistantInputObjectSchema } from './AssistantSettingsCreateWithoutAssistantInput.schema';
import { AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema as AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutAssistantInput.schema';
import { AssistantSettingsCreateOrConnectWithoutAssistantInputObjectSchema as AssistantSettingsCreateOrConnectWithoutAssistantInputObjectSchema } from './AssistantSettingsCreateOrConnectWithoutAssistantInput.schema';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './AssistantSettingsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutAssistantInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AssistantSettingsCreateOrConnectWithoutAssistantInputObjectSchema).optional(),
  connect: z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema).optional()
}).strict();
export const AssistantSettingsUncheckedCreateNestedOneWithoutAssistantInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUncheckedCreateNestedOneWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUncheckedCreateNestedOneWithoutAssistantInput>;
export const AssistantSettingsUncheckedCreateNestedOneWithoutAssistantInputObjectZodSchema = makeSchema();
