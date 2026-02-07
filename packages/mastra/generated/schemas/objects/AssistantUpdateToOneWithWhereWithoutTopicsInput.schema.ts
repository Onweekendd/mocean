import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema';
import { AssistantUpdateWithoutTopicsInputObjectSchema as AssistantUpdateWithoutTopicsInputObjectSchema } from './AssistantUpdateWithoutTopicsInput.schema';
import { AssistantUncheckedUpdateWithoutTopicsInputObjectSchema as AssistantUncheckedUpdateWithoutTopicsInputObjectSchema } from './AssistantUncheckedUpdateWithoutTopicsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AssistantUpdateWithoutTopicsInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutTopicsInputObjectSchema)])
}).strict();
export const AssistantUpdateToOneWithWhereWithoutTopicsInputObjectSchema: z.ZodType<Prisma.AssistantUpdateToOneWithWhereWithoutTopicsInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateToOneWithWhereWithoutTopicsInput>;
export const AssistantUpdateToOneWithWhereWithoutTopicsInputObjectZodSchema = makeSchema();
