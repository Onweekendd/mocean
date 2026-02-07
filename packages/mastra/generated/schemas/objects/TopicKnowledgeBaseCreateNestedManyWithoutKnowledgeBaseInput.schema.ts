import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseCreateWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelopeObjectSchema as TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelopeObjectSchema } from './TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelope.schema';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './TopicKnowledgeBaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema).array(), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseCreateOrConnectWithoutKnowledgeBaseInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopicKnowledgeBaseCreateManyKnowledgeBaseInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopicKnowledgeBaseCreateNestedManyWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateNestedManyWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateNestedManyWithoutKnowledgeBaseInput>;
export const TopicKnowledgeBaseCreateNestedManyWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
