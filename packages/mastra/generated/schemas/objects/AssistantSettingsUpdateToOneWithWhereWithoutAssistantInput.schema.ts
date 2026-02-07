import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsWhereInputObjectSchema as AssistantSettingsWhereInputObjectSchema } from './AssistantSettingsWhereInput.schema';
import { AssistantSettingsUpdateWithoutAssistantInputObjectSchema as AssistantSettingsUpdateWithoutAssistantInputObjectSchema } from './AssistantSettingsUpdateWithoutAssistantInput.schema';
import { AssistantSettingsUncheckedUpdateWithoutAssistantInputObjectSchema as AssistantSettingsUncheckedUpdateWithoutAssistantInputObjectSchema } from './AssistantSettingsUncheckedUpdateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantSettingsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AssistantSettingsUpdateWithoutAssistantInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedUpdateWithoutAssistantInputObjectSchema)])
}).strict();
export const AssistantSettingsUpdateToOneWithWhereWithoutAssistantInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUpdateToOneWithWhereWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUpdateToOneWithWhereWithoutAssistantInput>;
export const AssistantSettingsUpdateToOneWithWhereWithoutAssistantInputObjectZodSchema = makeSchema();
