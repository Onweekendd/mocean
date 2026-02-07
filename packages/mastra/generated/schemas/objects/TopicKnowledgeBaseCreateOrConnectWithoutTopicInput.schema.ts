import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './TopicKnowledgeBaseWhereUniqueInput.schema';
import { TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema as TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseCreateWithoutTopicInput.schema';
import { TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema as TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUncheckedCreateWithoutTopicInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema)])
}).strict();
export const TopicKnowledgeBaseCreateOrConnectWithoutTopicInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateOrConnectWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateOrConnectWithoutTopicInput>;
export const TopicKnowledgeBaseCreateOrConnectWithoutTopicInputObjectZodSchema = makeSchema();
