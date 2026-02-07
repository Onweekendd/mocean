import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithoutDefaultModelInputObjectSchema as AssistantUpdateWithoutDefaultModelInputObjectSchema } from './AssistantUpdateWithoutDefaultModelInput.schema';
import { AssistantUncheckedUpdateWithoutDefaultModelInputObjectSchema as AssistantUncheckedUpdateWithoutDefaultModelInputObjectSchema } from './AssistantUncheckedUpdateWithoutDefaultModelInput.schema';
import { AssistantCreateWithoutDefaultModelInputObjectSchema as AssistantCreateWithoutDefaultModelInputObjectSchema } from './AssistantCreateWithoutDefaultModelInput.schema';
import { AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema as AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema } from './AssistantUncheckedCreateWithoutDefaultModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AssistantUpdateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutDefaultModelInputObjectSchema)]),
  create: z.union([z.lazy(() => AssistantCreateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutDefaultModelInputObjectSchema)])
}).strict();
export const AssistantUpsertWithWhereUniqueWithoutDefaultModelInputObjectSchema: z.ZodType<Prisma.AssistantUpsertWithWhereUniqueWithoutDefaultModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpsertWithWhereUniqueWithoutDefaultModelInput>;
export const AssistantUpsertWithWhereUniqueWithoutDefaultModelInputObjectZodSchema = makeSchema();
