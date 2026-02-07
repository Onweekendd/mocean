import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutAssistantSettingsInputObjectSchema as ModelCreateWithoutAssistantSettingsInputObjectSchema } from './ModelCreateWithoutAssistantSettingsInput.schema';
import { ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema as ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema } from './ModelUncheckedCreateWithoutAssistantSettingsInput.schema';
import { ModelCreateOrConnectWithoutAssistantSettingsInputObjectSchema as ModelCreateOrConnectWithoutAssistantSettingsInputObjectSchema } from './ModelCreateOrConnectWithoutAssistantSettingsInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutAssistantSettingsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutAssistantSettingsInputObjectSchema).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional()
}).strict();
export const ModelCreateNestedOneWithoutAssistantSettingsInputObjectSchema: z.ZodType<Prisma.ModelCreateNestedOneWithoutAssistantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelCreateNestedOneWithoutAssistantSettingsInput>;
export const ModelCreateNestedOneWithoutAssistantSettingsInputObjectZodSchema = makeSchema();
