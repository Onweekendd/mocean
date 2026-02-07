import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateWithoutModelInputObjectSchema as TopicCreateWithoutModelInputObjectSchema } from './TopicCreateWithoutModelInput.schema';
import { TopicUncheckedCreateWithoutModelInputObjectSchema as TopicUncheckedCreateWithoutModelInputObjectSchema } from './TopicUncheckedCreateWithoutModelInput.schema';
import { TopicCreateOrConnectWithoutModelInputObjectSchema as TopicCreateOrConnectWithoutModelInputObjectSchema } from './TopicCreateOrConnectWithoutModelInput.schema';
import { TopicUpsertWithWhereUniqueWithoutModelInputObjectSchema as TopicUpsertWithWhereUniqueWithoutModelInputObjectSchema } from './TopicUpsertWithWhereUniqueWithoutModelInput.schema';
import { TopicCreateManyModelInputEnvelopeObjectSchema as TopicCreateManyModelInputEnvelopeObjectSchema } from './TopicCreateManyModelInputEnvelope.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema';
import { TopicUpdateWithWhereUniqueWithoutModelInputObjectSchema as TopicUpdateWithWhereUniqueWithoutModelInputObjectSchema } from './TopicUpdateWithWhereUniqueWithoutModelInput.schema';
import { TopicUpdateManyWithWhereWithoutModelInputObjectSchema as TopicUpdateManyWithWhereWithoutModelInputObjectSchema } from './TopicUpdateManyWithWhereWithoutModelInput.schema';
import { TopicScalarWhereInputObjectSchema as TopicScalarWhereInputObjectSchema } from './TopicScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicCreateWithoutModelInputObjectSchema), z.lazy(() => TopicCreateWithoutModelInputObjectSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => TopicCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopicUpsertWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => TopicUpsertWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopicCreateManyModelInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopicUpdateWithWhereUniqueWithoutModelInputObjectSchema), z.lazy(() => TopicUpdateWithWhereUniqueWithoutModelInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopicUpdateManyWithWhereWithoutModelInputObjectSchema), z.lazy(() => TopicUpdateManyWithWhereWithoutModelInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopicScalarWhereInputObjectSchema), z.lazy(() => TopicScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopicUncheckedUpdateManyWithoutModelNestedInputObjectSchema: z.ZodType<Prisma.TopicUncheckedUpdateManyWithoutModelNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicUncheckedUpdateManyWithoutModelNestedInput>;
export const TopicUncheckedUpdateManyWithoutModelNestedInputObjectZodSchema = makeSchema();
