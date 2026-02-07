import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicUpdateWithoutAgentInputObjectSchema as TopicUpdateWithoutAgentInputObjectSchema } from './TopicUpdateWithoutAgentInput.schema';
import { TopicUncheckedUpdateWithoutAgentInputObjectSchema as TopicUncheckedUpdateWithoutAgentInputObjectSchema } from './TopicUncheckedUpdateWithoutAgentInput.schema';
import { TopicCreateWithoutAgentInputObjectSchema as TopicCreateWithoutAgentInputObjectSchema } from './TopicCreateWithoutAgentInput.schema';
import { TopicUncheckedCreateWithoutAgentInputObjectSchema as TopicUncheckedCreateWithoutAgentInputObjectSchema } from './TopicUncheckedCreateWithoutAgentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopicUpdateWithoutAgentInputObjectSchema), z.lazy(() => TopicUncheckedUpdateWithoutAgentInputObjectSchema)]),
  create: z.union([z.lazy(() => TopicCreateWithoutAgentInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutAgentInputObjectSchema)])
}).strict();
export const TopicUpsertWithWhereUniqueWithoutAgentInputObjectSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutAgentInput>;
export const TopicUpsertWithWhereUniqueWithoutAgentInputObjectZodSchema = makeSchema();
