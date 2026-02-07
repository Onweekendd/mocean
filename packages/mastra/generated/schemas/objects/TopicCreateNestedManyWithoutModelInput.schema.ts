import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateWithoutModelInputObjectSchema as TopicCreateWithoutModelInputObjectSchema } from './TopicCreateWithoutModelInput.schema';
import { TopicUncheckedCreateWithoutModelInputObjectSchema as TopicUncheckedCreateWithoutModelInputObjectSchema } from './TopicUncheckedCreateWithoutModelInput.schema';
import { TopicCreateOrConnectWithoutModelInputObjectSchema as TopicCreateOrConnectWithoutModelInputObjectSchema } from './TopicCreateOrConnectWithoutModelInput.schema';
import { TopicCreateManyModelInputEnvelopeObjectSchema as TopicCreateManyModelInputEnvelopeObjectSchema } from './TopicCreateManyModelInputEnvelope.schema';
import { TopicWhereUniqueInputObjectSchema as TopicWhereUniqueInputObjectSchema } from './TopicWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicCreateWithoutModelInputObjectSchema), z.lazy(() => TopicCreateWithoutModelInputObjectSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutModelInputObjectSchema), z.lazy(() => TopicUncheckedCreateWithoutModelInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutModelInputObjectSchema), z.lazy(() => TopicCreateOrConnectWithoutModelInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopicCreateManyModelInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopicWhereUniqueInputObjectSchema), z.lazy(() => TopicWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopicCreateNestedManyWithoutModelInputObjectSchema: z.ZodType<Prisma.TopicCreateNestedManyWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateNestedManyWithoutModelInput>;
export const TopicCreateNestedManyWithoutModelInputObjectZodSchema = makeSchema();
