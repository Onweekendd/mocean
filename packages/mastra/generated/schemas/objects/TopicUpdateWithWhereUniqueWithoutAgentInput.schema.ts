import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicUpdateWithoutAgentInputObjectSchema as TopicUpdateWithoutAgentInputObjectSchema } from './TopicUpdateWithoutAgentInput.schema';
import { TopicUncheckedUpdateWithoutAgentInputObjectSchema as TopicUncheckedUpdateWithoutAgentInputObjectSchema } from './TopicUncheckedUpdateWithoutAgentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopicUpdateWithoutAgentInputObjectSchema), z.lazy(() => TopicUncheckedUpdateWithoutAgentInputObjectSchema)])
}).strict();
export const TopicUpdateWithWhereUniqueWithoutAgentInputObjectSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutAgentInput>;
export const TopicUpdateWithWhereUniqueWithoutAgentInputObjectZodSchema = makeSchema();
