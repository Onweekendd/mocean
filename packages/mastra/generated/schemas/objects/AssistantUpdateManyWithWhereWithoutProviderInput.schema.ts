import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantScalarWhereInputObjectSchema as AssistantScalarWhereInputObjectSchema } from './AssistantScalarWhereInput.schema';
import { AssistantUpdateManyMutationInputObjectSchema as AssistantUpdateManyMutationInputObjectSchema } from './AssistantUpdateManyMutationInput.schema';
import { AssistantUncheckedUpdateManyWithoutProviderInputObjectSchema as AssistantUncheckedUpdateManyWithoutProviderInputObjectSchema } from './AssistantUncheckedUpdateManyWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AssistantUpdateManyMutationInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateManyWithoutProviderInputObjectSchema)])
}).strict();
export const AssistantUpdateManyWithWhereWithoutProviderInputObjectSchema: z.ZodType<Prisma.AssistantUpdateManyWithWhereWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateManyWithWhereWithoutProviderInput>;
export const AssistantUpdateManyWithWhereWithoutProviderInputObjectZodSchema = makeSchema();
