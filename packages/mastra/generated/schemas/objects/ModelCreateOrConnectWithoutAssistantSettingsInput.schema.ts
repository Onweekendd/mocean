import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelCreateWithoutAssistantSettingsInputObjectSchema as ModelCreateWithoutAssistantSettingsInputObjectSchema } from './ModelCreateWithoutAssistantSettingsInput.schema';
import { ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema as ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema } from './ModelUncheckedCreateWithoutAssistantSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ModelCreateWithoutAssistantSettingsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema)])
}).strict();
export const ModelCreateOrConnectWithoutAssistantSettingsInputObjectSchema: z.ZodType<Prisma.ModelCreateOrConnectWithoutAssistantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateOrConnectWithoutAssistantSettingsInput>;
export const ModelCreateOrConnectWithoutAssistantSettingsInputObjectZodSchema = makeSchema();
