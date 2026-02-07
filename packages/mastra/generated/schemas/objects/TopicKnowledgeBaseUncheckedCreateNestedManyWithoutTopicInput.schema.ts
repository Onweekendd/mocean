import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema as TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseCreateWithoutTopicInput.schema';
import { TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema as TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUncheckedCreateWithoutTopicInput.schema';
import { TopicKnowledgeBaseCreateOrConnectWithoutTopicInputObjectSchema as TopicKnowledgeBaseCreateOrConnectWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseCreateOrConnectWithoutTopicInput.schema';
import { TopicKnowledgeBaseCreateManyTopicInputEnvelopeObjectSchema as TopicKnowledgeBaseCreateManyTopicInputEnvelopeObjectSchema } from './TopicKnowledgeBaseCreateManyTopicInputEnvelope.schema';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './TopicKnowledgeBaseWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema).array(), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TopicKnowledgeBaseCreateOrConnectWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseCreateOrConnectWithoutTopicInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TopicKnowledgeBaseCreateManyTopicInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema), z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TopicKnowledgeBaseUncheckedCreateNestedManyWithoutTopicInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUncheckedCreateNestedManyWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUncheckedCreateNestedManyWithoutTopicInput>;
export const TopicKnowledgeBaseUncheckedCreateNestedManyWithoutTopicInputObjectZodSchema = makeSchema();
