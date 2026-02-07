import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseCreateWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUpsertWithWhereUniqueWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelopeObjectSchema as TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelopeObjectSchema } from './TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelope.schema';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './TopicKnowledgeBaseWhereUniqueInput.schema';
import { TopicKnowledgeBaseUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUpdateWithWhereUniqueWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseUpdateManyWithWhereWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUpdateManyWithWhereWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUpdateManyWithWhereWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseScalarWhereInputObjectSchema as TopicKnowledgeBaseScalarWhereInputObjectSchema } from './TopicKnowledgeBaseScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema).array(), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TopicKnowledgeBaseUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUpsertWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TopicKnowledgeBaseUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TopicKnowledgeBaseUpdateManyWithWhereWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUpdateManyWithWhereWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TopicKnowledgeBaseScalarWhereInputObjectSchema), z.lazy(() => TopicKnowledgeBaseScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseNestedInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseNestedInput>;
export const TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseNestedInputObjectZodSchema = makeSchema();
