import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutSettingsInputObjectSchema as AssistantCreateWithoutSettingsInputObjectSchema } from './AssistantCreateWithoutSettingsInput.schema';
import { AssistantUncheckedCreateWithoutSettingsInputObjectSchema as AssistantUncheckedCreateWithoutSettingsInputObjectSchema } from './AssistantUncheckedCreateWithoutSettingsInput.schema';
import { AssistantCreateOrConnectWithoutSettingsInputObjectSchema as AssistantCreateOrConnectWithoutSettingsInputObjectSchema } from './AssistantCreateOrConnectWithoutSettingsInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutSettingsInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AssistantCreateOrConnectWithoutSettingsInputObjectSchema).optional(),
  connect: z.lazy(() => AssistantWhereUniqueInputObjectSchema).optional()
}).strict();
export const AssistantCreateNestedOneWithoutSettingsInputObjectSchema: z.ZodType<Prisma.AssistantCreateNestedOneWithoutSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateNestedOneWithoutSettingsInput>;
export const AssistantCreateNestedOneWithoutSettingsInputObjectZodSchema = makeSchema();
