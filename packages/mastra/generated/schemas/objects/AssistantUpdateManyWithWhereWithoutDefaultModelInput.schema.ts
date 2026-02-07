import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantScalarWhereInputObjectSchema as AssistantScalarWhereInputObjectSchema } from './AssistantScalarWhereInput.schema';
import { AssistantUpdateManyMutationInputObjectSchema as AssistantUpdateManyMutationInputObjectSchema } from './AssistantUpdateManyMutationInput.schema';
import { AssistantUncheckedUpdateManyWithoutDefaultModelInputObjectSchema as AssistantUncheckedUpdateManyWithoutDefaultModelInputObjectSchema } from './AssistantUncheckedUpdateManyWithoutDefaultModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AssistantUpdateManyMutationInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateManyWithoutDefaultModelInputObjectSchema)])
}).strict();
export const AssistantUpdateManyWithWhereWithoutDefaultModelInputObjectSchema: z.ZodType<Prisma.AssistantUpdateManyWithWhereWithoutDefaultModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateManyWithWhereWithoutDefaultModelInput>;
export const AssistantUpdateManyWithWhereWithoutDefaultModelInputObjectZodSchema = makeSchema();
