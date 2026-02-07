import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema as TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseCreateWithoutTopicInput.schema';
import { TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema as TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUncheckedCreateWithoutTopicInput.schema';
import { TopicKnowledgeBaseCreateOrConnectWithoutTopicInputObjectSchema as TopicKnowledgeBaseCreateOrConnectWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseCreateOrConnectWithoutTopicInput.schema';
import { TopicKnowledgeBaseUpsertWithWhereUniqueWithoutTopicInputObjectSchema as TopicKnowledgeBaseUpsertWithWhereUniqueWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUpsertWithWhereUniqueWithoutTopicInput.schema';
import { TopicKnowledgeBaseCreateManyTopicInputEnvelopeObjectSchema as TopicKnowledgeBaseCreateManyTopicInputEnvelopeObjectSchema } from './TopicKnowledgeBaseCreateManyTopicInputEnvelope.schema';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './TopicKnowledgeBaseWhereUniqueInput.schema';
import { TopicKnowledgeBaseUpdateWithWhereUniqueWithoutTopicInputObjectSchema as TopicKnowledgeBaseUpdateWithWhereUniqueWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUpdateWithWhereUniqueWithoutTopicInput.schema';
import { TopicKnowledgeBaseUpdateManyWithWhereWithoutTopicInputObjectSchema as TopicKnowledgeBaseUpdateManyWithWhereWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUpdateManyWithWhereWithoutTopicInput.schema';
import { TopicKnowledgeBaseScalarWhereInputObjectSchema as TopicKnowledgeBaseScalarWhereInputObjectSchema } from './TopicKnowledgeBaseScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema).array(), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopicKnowledgeBaseCreateOrConnectWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseCreateOrConnectWithoutTopicInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopicKnowledgeBaseUpsertWithWhereUniqueWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUpsertWithWhereUniqueWithoutTopicInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopicKnowledgeBaseCreateManyTopicInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopicKnowledgeBaseUpdateWithWhereUniqueWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUpdateWithWhereUniqueWithoutTopicInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopicKnowledgeBaseUpdateManyWithWhereWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUpdateManyWithWhereWithoutTopicInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopicKnowledgeBaseScalarWhereInputObjectSchema), z.lazy(() => TopicKnowledgeBaseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopicKnowledgeBaseUpdateManyWithoutTopicNestedInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpdateManyWithoutTopicNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpdateManyWithoutTopicNestedInput>;
export const TopicKnowledgeBaseUpdateManyWithoutTopicNestedInputObjectZodSchema = makeSchema();
