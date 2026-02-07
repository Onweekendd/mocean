import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicCreateWithoutAssistantInputObjectSchema as TopicCreateWithoutAssistantInputObjectSchema } from './TopicCreateWithoutAssistantInput.schema';
import { TopicUncheckedCreateWithoutAssistantInputObjectSchema as TopicUncheckedCreateWithoutAssistantInputObjectSchema } from './TopicUncheckedCreateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopicCreateWithoutAssistantInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutAssistantInputObjectSchema)])
}).strict();
export const TopicCreateOrConnectWithoutAssistantInputObjectSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateOrConnectWithoutAssistantInput>;
export const TopicCreateOrConnectWithoutAssistantInputObjectZodSchema = makeSchema();
