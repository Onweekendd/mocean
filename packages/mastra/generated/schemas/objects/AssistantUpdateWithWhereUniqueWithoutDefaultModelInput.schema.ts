import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithoutDefaultModelInputObjectSchema as AssistantUpdateWithoutDefaultModelInputObjectSchema } from './AssistantUpdateWithoutDefaultModelInput.schema';
import { AssistantUncheckedUpdateWithoutDefaultModelInputObjectSchema as AssistantUncheckedUpdateWithoutDefaultModelInputObjectSchema } from './AssistantUncheckedUpdateWithoutDefaultModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AssistantUpdateWithoutDefaultModelInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutDefaultModelInputObjectSchema)])
}).strict();
export const AssistantUpdateWithWhereUniqueWithoutDefaultModelInputObjectSchema: z.ZodType<Prisma.AssistantUpdateWithWhereUniqueWithoutDefaultModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateWithWhereUniqueWithoutDefaultModelInput>;
export const AssistantUpdateWithWhereUniqueWithoutDefaultModelInputObjectZodSchema = makeSchema();
