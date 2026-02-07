import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsWhereUniqueInputObjectSchema as AssistantSettingsWhereUniqueInputObjectSchema } from './AssistantSettingsWhereUniqueInput.schema';
import { AssistantSettingsCreateWithoutDefaultModelInputObjectSchema as AssistantSettingsCreateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsCreateWithoutDefaultModelInput.schema';
import { AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema as AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUncheckedCreateWithoutDefaultModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantSettingsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AssistantSettingsCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedCreateWithoutDefaultModelInputObjectSchema)])
}).strict();
export const AssistantSettingsCreateOrConnectWithoutDefaultModelInputObjectSchema: z.ZodType<Prisma.AssistantSettingsCreateOrConnectWithoutDefaultModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsCreateOrConnectWithoutDefaultModelInput>;
export const AssistantSettingsCreateOrConnectWithoutDefaultModelInputObjectZodSchema = makeSchema();
