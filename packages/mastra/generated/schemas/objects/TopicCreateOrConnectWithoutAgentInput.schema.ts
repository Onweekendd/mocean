import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicCreateWithoutAgentInputObjectSchema as TopicCreateWithoutAgentInputObjectSchema } from './TopicCreateWithoutAgentInput.schema';
import { TopicUncheckedCreateWithoutAgentInputObjectSchema as TopicUncheckedCreateWithoutAgentInputObjectSchema } from './TopicUncheckedCreateWithoutAgentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopicCreateWithoutAgentInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutAgentInputObjectSchema)])
}).strict();
export const TopicCreateOrConnectWithoutAgentInputObjectSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateOrConnectWithoutAgentInput>;
export const TopicCreateOrConnectWithoutAgentInputObjectZodSchema = makeSchema();
