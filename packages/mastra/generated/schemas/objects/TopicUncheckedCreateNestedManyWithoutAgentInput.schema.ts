import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateWithoutAgentInputObjectSchema as TopicCreateWithoutAgentInputObjectSchema } from './TopicCreateWithoutAgentInput.schema';
import { TopicUncheckedCreateWithoutAgentInputObjectSchema as TopicUncheckedCreateWithoutAgentInputObjectSchema } from './TopicUncheckedCreateWithoutAgentInput.schema';
import { TopicCreateOrConnectWithoutAgentInputObjectSchema as TopicCreateOrConnectWithoutAgentInputObjectSchema } from './TopicCreateOrConnectWithoutAgentInput.schema';
import { TopicCreateManyAgentInputEnvelopeObjectSchema as TopicCreateManyAgentInputEnvelopeObjectSchema } from './TopicCreateManyAgentInputEnvelope.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicCreateWithoutAgentInputObjectSchema), z.lazy(() => TopicCreateWithoutAgentInputObjectSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutAgentInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutAgentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutAgentInputObjectSchema), z.lazy(() => TopicCreateOrConnectWithoutAgentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopicCreateManyAgentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopicUncheckedCreateNestedManyWithoutAgentInputObjectSchema: z.ZodType<Prisma.TopicUncheckedCreateNestedManyWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUncheckedCreateNestedManyWithoutAgentInput>;
export const TopicUncheckedCreateNestedManyWithoutAgentInputObjectZodSchema = makeSchema();
