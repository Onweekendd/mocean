import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithoutProviderInputObjectSchema as AssistantUpdateWithoutProviderInputObjectSchema } from './AssistantUpdateWithoutProviderInput.schema';
import { AssistantUncheckedUpdateWithoutProviderInputObjectSchema as AssistantUncheckedUpdateWithoutProviderInputObjectSchema } from './AssistantUncheckedUpdateWithoutProviderInput.schema';
import { AssistantCreateWithoutProviderInputObjectSchema as AssistantCreateWithoutProviderInputObjectSchema } from './AssistantCreateWithoutProviderInput.schema';
import { AssistantUncheckedCreateWithoutProviderInputObjectSchema as AssistantUncheckedCreateWithoutProviderInputObjectSchema } from './AssistantUncheckedCreateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AssistantUpdateWithoutProviderInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutProviderInputObjectSchema)]),
  create: z.union([z.lazy(() => AssistantCreateWithoutProviderInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutProviderInputObjectSchema)])
}).strict();
export const AssistantUpsertWithWhereUniqueWithoutProviderInputObjectSchema: z.ZodType<Prisma.AssistantUpsertWithWhereUniqueWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpsertWithWhereUniqueWithoutProviderInput>;
export const AssistantUpsertWithWhereUniqueWithoutProviderInputObjectZodSchema = makeSchema();
