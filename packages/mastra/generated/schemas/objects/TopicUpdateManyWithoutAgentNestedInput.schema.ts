import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateWithoutAgentInputObjectSchema as TopicCreateWithoutAgentInputObjectSchema } from './TopicCreateWithoutAgentInput.schema';
import { TopicUncheckedCreateWithoutAgentInputObjectSchema as TopicUncheckedCreateWithoutAgentInputObjectSchema } from './TopicUncheckedCreateWithoutAgentInput.schema';
import { TopicCreateOrConnectWithoutAgentInputObjectSchema as TopicCreateOrConnectWithoutAgentInputObjectSchema } from './TopicCreateOrConnectWithoutAgentInput.schema';
import { TopicUpsertWithWhereUniqueWithoutAgentInputObjectSchema as TopicUpsertWithWhereUniqueWithoutAgentInputObjectSchema } from './TopicUpsertWithWhereUniqueWithoutAgentInput.schema';
import { TopicCreateManyAgentInputEnvelopeObjectSchema as TopicCreateManyAgentInputEnvelopeObjectSchema } from './TopicCreateManyAgentInputEnvelope.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicUpdateWithWhereUniqueWithoutAgentInputObjectSchema as TopicUpdateWithWhereUniqueWithoutAgentInputObjectSchema } from './TopicUpdateWithWhereUniqueWithoutAgentInput.schema';
import { TopicUpdateManyWithWhereWithoutAgentInputObjectSchema as TopicUpdateManyWithWhereWithoutAgentInputObjectSchema } from './TopicUpdateManyWithWhereWithoutAgentInput.schema';
import { TopicScalarWhereInputObjectSchema as TopicScalarWhereInputObjectSchema } from './TopicScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicCreateWithoutAgentInputObjectSchema), z.lazy(() => TopicCreateWithoutAgentInputObjectSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutAgentInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutAgentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutAgentInputObjectSchema), z.lazy(() => TopicCreateOrConnectWithoutAgentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopicUpsertWithWhereUniqueWithoutAgentInputObjectSchema), z.lazy(() => TopicUpsertWithWhereUniqueWithoutAgentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopicCreateManyAgentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopicUpdateWithWhereUniqueWithoutAgentInputObjectSchema), z.lazy(() => TopicUpdateWithWhereUniqueWithoutAgentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopicUpdateManyWithWhereWithoutAgentInputObjectSchema), z.lazy(() => TopicUpdateManyWithWhereWithoutAgentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopicScalarWhereInputObjectSchema), z.lazy(() => TopicScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopicUpdateManyWithoutAgentNestedInputObjectSchema: z.ZodType<Prisma.TopicUpdateManyWithoutAgentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpdateManyWithoutAgentNestedInput>;
export const TopicUpdateManyWithoutAgentNestedInputObjectZodSchema = makeSchema();
