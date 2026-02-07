import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './AssistantSettingsWhereInput.schema';
import { AssistantSettingsUpdateWithoutAgentInputObjectSchema as AssistantSettingsUpdateWithoutAgentInputObjectSchema } from './AssistantSettingsUpdateWithoutAgentInput.schema';
import { AssistantSettingsUncheckedUpdateWithoutAgentInputObjectSchema as AssistantSettingsUncheckedUpdateWithoutAgentInputObjectSchema } from './AssistantSettingsUncheckedUpdateWithoutAgentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantSettingsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AssistantSettingsUpdateWithoutAgentInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedUpdateWithoutAgentInputObjectSchema)])
}).strict();
export const AssistantSettingsUpdateToOneWithWhereWithoutAgentInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUpdateToOneWithWhereWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUpdateToOneWithWhereWithoutAgentInput>;
export const AssistantSettingsUpdateToOneWithWhereWithoutAgentInputObjectZodSchema = makeSchema();
