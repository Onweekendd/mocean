import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithoutModelInputObjectSchema as AssistantUpdateWithoutModelInputObjectSchema } from './AssistantUpdateWithoutModelInput.schema';
import { AssistantUncheckedUpdateWithoutModelInputObjectSchema as AssistantUncheckedUpdateWithoutModelInputObjectSchema } from './AssistantUncheckedUpdateWithoutModelInput.schema';
import { AssistantCreateWithoutModelInputObjectSchema as AssistantCreateWithoutModelInputObjectSchema } from './AssistantCreateWithoutModelInput.schema';
import { AssistantUncheckedCreateWithoutModelInputObjectSchema as AssistantUncheckedCreateWithoutModelInputObjectSchema } from './AssistantUncheckedCreateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AssistantUpdateWithoutModelInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutModelInputObjectSchema)]),
  create: z.union([z.lazy(() => AssistantCreateWithoutModelInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutModelInputObjectSchema)])
}).strict();
export const AssistantUpsertWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.AssistantUpsertWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpsertWithWhereUniqueWithoutModelInput>;
export const AssistantUpsertWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
