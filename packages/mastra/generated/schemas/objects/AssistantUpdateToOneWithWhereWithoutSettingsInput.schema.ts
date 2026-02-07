import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema';
import { AssistantUpdateWithoutSettingsInputObjectSchema as AssistantUpdateWithoutSettingsInputObjectSchema } from './AssistantUpdateWithoutSettingsInput.schema';
import { AssistantUncheckedUpdateWithoutSettingsInputObjectSchema as AssistantUncheckedUpdateWithoutSettingsInputObjectSchema } from './AssistantUncheckedUpdateWithoutSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AssistantUpdateWithoutSettingsInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutSettingsInputObjectSchema)])
}).strict();
export const AssistantUpdateToOneWithWhereWithoutSettingsInputObjectSchema: z.ZodType<Prisma.AssistantUpdateToOneWithWhereWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateToOneWithWhereWithoutSettingsInput>;
export const AssistantUpdateToOneWithWhereWithoutSettingsInputObjectZodSchema = makeSchema();
