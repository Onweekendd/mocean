import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateWithoutAssistantInputObjectSchema as TopicCreateWithoutAssistantInputObjectSchema } from './TopicCreateWithoutAssistantInput.schema';
import { TopicUncheckedCreateWithoutAssistantInputObjectSchema as TopicUncheckedCreateWithoutAssistantInputObjectSchema } from './TopicUncheckedCreateWithoutAssistantInput.schema';
import { TopicCreateOrConnectWithoutAssistantInputObjectSchema as TopicCreateOrConnectWithoutAssistantInputObjectSchema } from './TopicCreateOrConnectWithoutAssistantInput.schema';
import { TopicUpsertWithWhereUniqueWithoutAssistantInputObjectSchema as TopicUpsertWithWhereUniqueWithoutAssistantInputObjectSchema } from './TopicUpsertWithWhereUniqueWithoutAssistantInput.schema';
import { TopicCreateManyAssistantInputEnvelopeObjectSchema as TopicCreateManyAssistantInputEnvelopeObjectSchema } from './TopicCreateManyAssistantInputEnvelope.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicUpdateWithWhereUniqueWithoutAssistantInputObjectSchema as TopicUpdateWithWhereUniqueWithoutAssistantInputObjectSchema } from './TopicUpdateWithWhereUniqueWithoutAssistantInput.schema';
import { TopicUpdateManyWithWhereWithoutAssistantInputObjectSchema as TopicUpdateManyWithWhereWithoutAssistantInputObjectSchema } from './TopicUpdateManyWithWhereWithoutAssistantInput.schema';
import { TopicScalarWhereInputObjectSchema as TopicScalarWhereInputObjectSchema } from './TopicScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicCreateWithoutAssistantInputObjectSchema), z.lazy(() => TopicCreateWithoutAssistantInputObjectSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutAssistantInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutAssistantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutAssistantInputObjectSchema), z.lazy(() => TopicCreateOrConnectWithoutAssistantInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopicUpsertWithWhereUniqueWithoutAssistantInputObjectSchema), z.lazy(() => TopicUpsertWithWhereUniqueWithoutAssistantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopicCreateManyAssistantInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopicUpdateWithWhereUniqueWithoutAssistantInputObjectSchema), z.lazy(() => TopicUpdateWithWhereUniqueWithoutAssistantInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopicUpdateManyWithWhereWithoutAssistantInputObjectSchema), z.lazy(() => TopicUpdateManyWithWhereWithoutAssistantInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopicScalarWhereInputObjectSchema), z.lazy(() => TopicScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopicUpdateManyWithoutAssistantNestedInputObjectSchema: z.ZodType<Prisma.TopicUpdateManyWithoutAssistantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUpdateManyWithoutAssistantNestedInput>;
export const TopicUpdateManyWithoutAssistantNestedInputObjectZodSchema = makeSchema();
