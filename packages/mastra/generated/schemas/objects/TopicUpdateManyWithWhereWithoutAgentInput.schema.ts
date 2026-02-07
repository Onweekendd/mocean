import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicScalarWhereInputObjectSchema as TopicScalarWhereInputObjectSchema } from './TopicScalarWhereInput.schema';
import { TopicUpdateManyMutationInputObjectSchema as TopicUpdateManyMutationInputObjectSchema } from './TopicUpdateManyMutationInput.schema';
import { TopicUncheckedUpdateManyWithoutAgentInputObjectSchema as TopicUncheckedUpdateManyWithoutAgentInputObjectSchema } from './TopicUncheckedUpdateManyWithoutAgentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputObjectSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutAgentInputObjectSchema)])
}).strict();
export const TopicUpdateManyWithWhereWithoutAgentInputObjectSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutAgentInput>;
export const TopicUpdateManyWithWhereWithoutAgentInputObjectZodSchema = makeSchema();
