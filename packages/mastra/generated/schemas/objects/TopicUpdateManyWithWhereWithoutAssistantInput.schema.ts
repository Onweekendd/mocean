import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicScalarWhereInputObjectSchema as TopicScalarWhereInputObjectSchema } from './TopicScalarWhereInput.schema';
import { TopicUpdateManyMutationInputObjectSchema as TopicUpdateManyMutationInputObjectSchema } from './TopicUpdateManyMutationInput.schema';
import { TopicUncheckedUpdateManyWithoutAssistantInputObjectSchema as TopicUncheckedUpdateManyWithoutAssistantInputObjectSchema } from './TopicUncheckedUpdateManyWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopicUpdateManyMutationInputObjectSchema), z.lazy(() => TopicUncheckedUpdateManyWithoutAssistantInputObjectSchema)])
}).strict();
export const TopicUpdateManyWithWhereWithoutAssistantInputObjectSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutAssistantInput>;
export const TopicUpdateManyWithWhereWithoutAssistantInputObjectZodSchema = makeSchema();
