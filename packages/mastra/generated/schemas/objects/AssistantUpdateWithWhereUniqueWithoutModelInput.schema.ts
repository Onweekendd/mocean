import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithoutModelInputObjectSchema as AssistantUpdateWithoutModelInputObjectSchema } from './AssistantUpdateWithoutModelInput.schema';
import { AssistantUncheckedUpdateWithoutModelInputObjectSchema as AssistantUncheckedUpdateWithoutModelInputObjectSchema } from './AssistantUncheckedUpdateWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AssistantUpdateWithoutModelInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutModelInputObjectSchema)])
}).strict();
export const AssistantUpdateWithWhereUniqueWithoutModelInputObjectSchema: z.ZodType<Prisma.AssistantUpdateWithWhereUniqueWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateWithWhereUniqueWithoutModelInput>;
export const AssistantUpdateWithWhereUniqueWithoutModelInputObjectZodSchema = makeSchema();
