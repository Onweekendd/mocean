import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './AssistantSettingsWhereUniqueInput.schema';
import { AssistantSettingsUpdateWithoutDefaultModelInputObjectSchema as AssistantSettingsUpdateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUpdateWithoutDefaultModelInput.schema';
import { AssistantSettingsUncheckedUpdateWithoutDefaultModelInputObjectSchema as AssistantSettingsUncheckedUpdateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUncheckedUpdateWithoutDefaultModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AssistantSettingsUpdateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedUpdateWithoutDefaultModelInputObjectSchema)])
}).strict();
export const AssistantSettingsUpdateWithWhereUniqueWithoutDefaultModelInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUpdateWithWhereUniqueWithoutDefaultModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUpdateWithWhereUniqueWithoutDefaultModelInput>;
export const AssistantSettingsUpdateWithWhereUniqueWithoutDefaultModelInputObjectZodSchema = makeSchema();
