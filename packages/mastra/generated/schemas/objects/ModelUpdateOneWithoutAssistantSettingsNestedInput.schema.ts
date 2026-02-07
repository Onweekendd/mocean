import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelCreateWithoutAssistantSettingsInputObjectSchema as ModelCreateWithoutAssistantSettingsInputObjectSchema } from './ModelCreateWithoutAssistantSettingsInput.schema';
import { ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema as ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema } from './ModelUncheckedCreateWithoutAssistantSettingsInput.schema';
import { ModelCreateOrConnectWithoutAssistantSettingsInputObjectSchema as ModelCreateOrConnectWithoutAssistantSettingsInputObjectSchema } from './ModelCreateOrConnectWithoutAssistantSettingsInput.schema';
import { ModelUpsertWithoutAssistantSettingsInputObjectSchema as ModelUpsertWithoutAssistantSettingsInputObjectSchema } from './ModelUpsertWithoutAssistantSettingsInput.schema';
import { ModelWhereInputObjectSchema as ModelWhereInputObjectSchema } from './ModelWhereInput.schema';
import { ModelWhereUniqueInputObjectSchema as ModelWhereUniqueInputObjectSchema } from './ModelWhereUniqueInput.schema';
import { ModelUpdateToOneWithWhereWithoutAssistantSettingsInputObjectSchema as ModelUpdateToOneWithWhereWithoutAssistantSettingsInputObjectSchema } from './ModelUpdateToOneWithWhereWithoutAssistantSettingsInput.schema';
import { ModelUpdateWithoutAssistantSettingsInputObjectSchema as ModelUpdateWithoutAssistantSettingsInputObjectSchema } from './ModelUpdateWithoutAssistantSettingsInput.schema';
import { ModelUncheckedUpdateWithoutAssistantSettingsInputObjectSchema as ModelUncheckedUpdateWithoutAssistantSettingsInputObjectSchema } from './ModelUncheckedUpdateWithoutAssistantSettingsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ModelCreateWithoutAssistantSettingsInputObjectSchema), z.lazy(() => ModelUncheckedCreateWithoutAssistantSettingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ModelCreateOrConnectWithoutAssistantSettingsInputObjectSchema).optional(),
  upsert: z.lazy(() => ModelUpsertWithoutAssistantSettingsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ModelWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ModelWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ModelUpdateToOneWithWhereWithoutAssistantSettingsInputObjectSchema), z.lazy(() => ModelUpdateWithoutAssistantSettingsInputObjectSchema), z.lazy(() => ModelUncheckedUpdateWithoutAssistantSettingsInputObjectSchema)]).optional()
}).strict();
export const ModelUpdateOneWithoutAssistantSettingsNestedInputObjectSchema: z.ZodType<Prisma.ModelUpdateOneWithoutAssistantSettingsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelUpdateOneWithoutAssistantSettingsNestedInput>;
export const ModelUpdateOneWithoutAssistantSettingsNestedInputObjectZodSchema = makeSchema();
