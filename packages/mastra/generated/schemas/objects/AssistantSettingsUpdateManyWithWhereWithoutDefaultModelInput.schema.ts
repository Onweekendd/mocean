import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantSettingsScalarWhereInputObjectSchema as AssistantSettingsScalarWhereInputObjectSchema } from './AssistantSettingsScalarWhereInput.schema';
import { AssistantSettingsUpdateManyMutationInputObjectSchema as AssistantSettingsUpdateManyMutationInputObjectSchema } from './AssistantSettingsUpdateManyMutationInput.schema';
import { AssistantSettingsUncheckedUpdateManyWithoutDefaultModelInputObjectSchema as AssistantSettingsUncheckedUpdateManyWithoutDefaultModelInputObjectSchema } from './AssistantSettingsUncheckedUpdateManyWithoutDefaultModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantSettingsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AssistantSettingsUpdateManyMutationInputObjectSchema), z.lazy(() => AssistantSettingsUncheckedUpdateManyWithoutDefaultModelInputObjectSchema)])
}).strict();
export const AssistantSettingsUpdateManyWithWhereWithoutDefaultModelInputObjectSchema: z.ZodType<Prisma.AssistantSettingsUpdateManyWithWhereWithoutDefaultModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantSettingsUpdateManyWithWhereWithoutDefaultModelInput>;
export const AssistantSettingsUpdateManyWithWhereWithoutDefaultModelInputObjectZodSchema = makeSchema();
