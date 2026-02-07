import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelUpdateWithoutAssistantSettingsInputObjectSchema as ModelUpdateWithoutAssistantSettingsInputObjectSchema } from './ModelUpdateWithoutAssistantSettingsInput.schema';
import { ModelUncheckedUpdateWithoutAssistantSettingsInputObjectSchema as ModelUncheckedUpdateWithoutAssistantSettingsInputObjectSchema } from './ModelUncheckedUpdateWithoutAssistantSettingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ModelUpdateWithoutAssistantSettingsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutAssistantSettingsInputObjectSchema)])
}).strict();
export const ModelUpdateToOneWithWhereWithoutAssistantSettingsInputObjectSchema: z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutAssistantSettingsInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateToOneWithWhereWithoutAssistantSettingsInput>;
export const ModelUpdateToOneWithWhereWithoutAssistantSettingsInputObjectZodSchema = makeSchema();
