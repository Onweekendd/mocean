import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantScalarWhereInputObjectSchema as AssistantScalarWhereInputObjectSchema } from './AssistantScalarWhereInput.schema';
import { AssistantUpdateManyMutationInputObjectSchema as AssistantUpdateManyMutationInputObjectSchema } from './AssistantUpdateManyMutationInput.schema';
import { AssistantUncheckedUpdateManyWithoutModelInputObjectSchema as AssistantUncheckedUpdateManyWithoutModelInputObjectSchema } from './AssistantUncheckedUpdateManyWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AssistantUpdateManyMutationInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateManyWithoutModelInputObjectSchema)])
}).strict();
export const AssistantUpdateManyWithWhereWithoutModelInputObjectSchema: z.ZodType<Prisma.AssistantUpdateManyWithWhereWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateManyWithWhereWithoutModelInput>;
export const AssistantUpdateManyWithWhereWithoutModelInputObjectZodSchema = makeSchema();
