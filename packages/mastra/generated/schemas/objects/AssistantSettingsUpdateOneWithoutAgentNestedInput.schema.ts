import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsCreateWithoutAgentInputObjectSchema as AssistantSettingsCreateWithoutAgentInputObjectSchema } from './AssistantSettingsCreateWithoutAgentInput.schema';
import { AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema as AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutAgentInput.schema';
import { AssistantSettingsCreateOrConnectWithoutAgentInputObjectSchema as AssistantSettingsCreateOrConnectWithoutAgentInputObjectSchema } from './AssistantSettingsCreateOrConnectWithoutAgentInput.schema';
import { AssistantSettingsUpsertWithoutAgentInputObjectSchema as AssistantSettingsUpsertWithoutAgentInputObjectSchema } from './AssistantSettingsUpsertWithoutAgentInput.schema';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './AssistantSettingsWhereInput.schema';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './AssistantSettingsWhereUniqueInput.schema';
import { AssistantSettingsUpdateToOneWithWhereWithoutAgentInputObjectSchema as AssistantSettingsUpdateToOneWithWhereWithoutAgentInputObjectSchema } from './AssistantSettingsUpdateToOneWithWhereWithoutAgentInput.schema';
import { AssistantSettingsUpdateWithoutAgentInputObjectSchema as AssistantSettingsUpdateWithoutAgentInputObjectSchema } from './AssistantSettingsUpdateWithoutAgentInput.schema';
import { AssistantSettingsUncheckedUpdateWithoutAgentInputObjectSchema as AssistantSettingsUncheckedUpdateWithoutAgentInputObjectSchema } from './AssistantSettingsUncheckedUpdateWithoutAgentInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutAgentInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutAgentInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AssistantSettingsCreateOrConnectWithoutAgentInputObjectSchema).optional(),
  upsert: z.lazy(() => AssistantSettingsUpsertWithoutAgentInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AssistantSettingsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AssistantSettingsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AssistantSettingsUpdateToOneWithWhereWithoutAgentInputObjectSchema), z.lazy(() => AssistantSettingsUpdateWithoutAgentInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedUpdateWithoutAgentInputObjectSchema)]).optional()
}).strict();
export const AssistantSettingsUpdateOneWithoutAgentNestedInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUpdateOneWithoutAgentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUpdateOneWithoutAgentNestedInput>;
export const AssistantSettingsUpdateOneWithoutAgentNestedInputObjectZodSchema = makeSchema();
