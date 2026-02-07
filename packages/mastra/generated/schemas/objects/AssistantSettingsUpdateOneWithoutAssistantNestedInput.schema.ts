import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsCreateWithoutAssistantInputObjectSchema as AssistantSettingsCreateWithoutAssistantInputObjectSchema } from './AssistantSettingsCreateWithoutAssistantInput.schema';
import { AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema as AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutAssistantInput.schema';
import { AssistantSettingsCreateOrConnectWithoutAssistantInputObjectSchema as AssistantSettingsCreateOrConnectWithoutAssistantInputObjectSchema } from './AssistantSettingsCreateOrConnectWithoutAssistantInput.schema';
import { AssistantSettingsUpsertWithoutAssistantInputObjectSchema as AssistantSettingsUpsertWithoutAssistantInputObjectSchema } from './AssistantSettingsUpsertWithoutAssistantInput.schema';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './AssistantSettingsWhereInput.schema';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './AssistantSettingsWhereUniqueInput.schema';
import { AssistantSettingsUpdateToOneWithWhereWithoutAssistantInputObjectSchema as AssistantSettingsUpdateToOneWithWhereWithoutAssistantInputObjectSchema } from './AssistantSettingsUpdateToOneWithWhereWithoutAssistantInput.schema';
import { AssistantSettingsUpdateWithoutAssistantInputObjectSchema as AssistantSettingsUpdateWithoutAssistantInputObjectSchema } from './AssistantSettingsUpdateWithoutAssistantInput.schema';
import { AssistantSettingsUncheckedUpdateWithoutAssistantInputObjectSchema as AssistantSettingsUncheckedUpdateWithoutAssistantInputObjectSchema } from './AssistantSettingsUncheckedUpdateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutAssistantInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutAssistantInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AssistantSettingsCreateOrConnectWithoutAssistantInputObjectSchema).optional(),
  upsert: z.lazy(() => AssistantSettingsUpsertWithoutAssistantInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AssistantSettingsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AssistantSettingsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AssistantSettingsUpdateToOneWithWhereWithoutAssistantInputObjectSchema), z.lazy(() => AssistantSettingsUpdateWithoutAssistantInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedUpdateWithoutAssistantInputObjectSchema)]).optional()
}).strict();
export const AssistantSettingsUpdateOneWithoutAssistantNestedInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUpdateOneWithoutAssistantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUpdateOneWithoutAssistantNestedInput>;
export const AssistantSettingsUpdateOneWithoutAssistantNestedInputObjectZodSchema = makeSchema();
