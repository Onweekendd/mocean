import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicUpdateWithoutAssistantInputObjectSchema as TopicUpdateWithoutAssistantInputObjectSchema } from './TopicUpdateWithoutAssistantInput.schema';
import { TopicUncheckedUpdateWithoutAssistantInputObjectSchema as TopicUncheckedUpdateWithoutAssistantInputObjectSchema } from './TopicUncheckedUpdateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopicUpdateWithoutAssistantInputObjectSchema), z.lazy(() => TopicUncheckedUpdateWithoutAssistantInputObjectSchema)])
}).strict();
export const TopicUpdateWithWhereUniqueWithoutAssistantInputObjectSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutAssistantInput>;
export const TopicUpdateWithWhereUniqueWithoutAssistantInputObjectZodSchema = makeSchema();
