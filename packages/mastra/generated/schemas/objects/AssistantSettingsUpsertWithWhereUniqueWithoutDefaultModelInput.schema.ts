import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './AssistantSettingsWhereUniqueInput.schema';
import { AssistantSettingsUpdateWithoutDefaultModelInputObjectSchema as AssistantSettingsUpdateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUpdateWithoutDefaultModelInput.schema';
import { AssistantSettingsUncheckedUpdateWithoutDefaultModelInputObjectSchema as AssistantSettingsUncheckedUpdateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUncheckedUpdateWithoutDefaultModelInput.schema';
import { AssistantSettingsCreateWithoutDefaultModelInputObjectSchema as AssistantSettingsCreateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsCreateWithoutDefaultModelInput.schema';
import { AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema as AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutDefaultModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AssistantSettingsUpdateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedUpdateWithoutDefaultModelInputObjectSchema)]),
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema)])
}).strict();
export const AssistantSettingsUpsertWithWhereUniqueWithoutDefaultModelInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUpsertWithWhereUniqueWithoutDefaultModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUpsertWithWhereUniqueWithoutDefaultModelInput>;
export const AssistantSettingsUpsertWithWhereUniqueWithoutDefaultModelInputObjectZodSchema = makeSchema();
