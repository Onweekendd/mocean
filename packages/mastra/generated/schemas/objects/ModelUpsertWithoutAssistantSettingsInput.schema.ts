import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelUpdateWithoutAssistantSettingsInputObjectSchema as ModelUpdateWithoutAssistantSettingsInputObjectSchema } from './ModelUpdateWithoutAssistantSettingsInput.schema';
import { ModelUncheckedUpdateWithoutAssistantSettingsInputObjectSchema as ModelUncheckedUpdateWithoutAssistantSettingsInputObjectSchema } from './ModelUncheckedUpdateWithoutAssistantSettingsInput.schema';
import { ModelCreateWithoutAssistantSettingsInputObjectSchema as ModelCreateWithoutAssistantSettingsInputObjectSchema } from './ModelCreateWithoutAssistantSettingsInput.schema';
import { ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema as ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema } from './ModelUncheckedCreateWithoutAssistantSettingsInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ModelUpdateWithoutAssistantSettingsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutAssistantSettingsInputObjectSchema)]),
  create: z.union([z.lazy(() => ModelCreateWithoutAssistantSettingsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema)]),
  where: z.lazy(() => ModelWhereInputObjectSchema).optional()
}).strict();
export const ModelUpsertWithoutAssistantSettingsInputObjectSchema: z.ZodType<Prisma.ModelUpsertWithoutAssistantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpsertWithoutAssistantSettingsInput>;
export const ModelUpsertWithoutAssistantSettingsInputObjectZodSchema = makeSchema();
