import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateWithoutProviderInputObjectSchema as AssistantUpdateWithoutProviderInputObjectSchema } from './AssistantUpdateWithoutProviderInput.schema';
import { AssistantUncheckedUpdateWithoutProviderInputObjectSchema as AssistantUncheckedUpdateWithoutProviderInputObjectSchema } from './AssistantUncheckedUpdateWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AssistantUpdateWithoutProviderInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutProviderInputObjectSchema)])
}).strict();
export const AssistantUpdateWithWhereUniqueWithoutProviderInputObjectSchema: z.ZodType<Prisma.AssistantUpdateWithWhereUniqueWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateWithWhereUniqueWithoutProviderInput>;
export const AssistantUpdateWithWhereUniqueWithoutProviderInputObjectZodSchema = makeSchema();
