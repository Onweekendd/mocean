import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicUpdateWithoutAssistantInputObjectSchema as TopicUpdateWithoutAssistantInputObjectSchema } from './TopicUpdateWithoutAssistantInput.schema';
import { TopicUncheckedUpdateWithoutAssistantInputObjectSchema as TopicUncheckedUpdateWithoutAssistantInputObjectSchema } from './TopicUncheckedUpdateWithoutAssistantInput.schema';
import { TopicCreateWithoutAssistantInputObjectSchema as TopicCreateWithoutAssistantInputObjectSchema } from './TopicCreateWithoutAssistantInput.schema';
import { TopicUncheckedCreateWithoutAssistantInputObjectSchema as TopicUncheckedCreateWithoutAssistantInputObjectSchema } from './TopicUncheckedCreateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopicUpdateWithoutAssistantInputObjectSchema), z.lazy(() => TopicUncheckedUpdateWithoutAssistantInputObjectSchema)]),
  create: z.union([z.lazy(() => TopicCreateWithoutAssistantInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutAssistantInputObjectSchema)])
}).strict();
export const TopicUpsertWithWhereUniqueWithoutAssistantInputObjectSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutAssistantInput>;
export const TopicUpsertWithWhereUniqueWithoutAssistantInputObjectZodSchema = makeSchema();
