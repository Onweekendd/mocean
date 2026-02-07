import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantCreateWithoutSettingsInputObjectSchema as AssistantCreateWithoutSettingsInputObjectSchema } from './AssistantCreateWithoutSettingsInput.schema';
import { AssistantUncheckedCreateWithoutSettingsInputObjectSchema as AssistantUncheckedCreateWithoutSettingsInputObjectSchema } from './AssistantUncheckedCreateWithoutSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AssistantCreateWithoutSettingsInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutSettingsInputObjectSchema)])
}).strict();
export const AssistantCreateOrConnectWithoutSettingsInputObjectSchema: z.ZodType<Prisma.AssistantCreateOrConnectWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateOrConnectWithoutSettingsInput>;
export const AssistantCreateOrConnectWithoutSettingsInputObjectZodSchema = makeSchema();
