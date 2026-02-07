import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './TopicKnowledgeBaseWhereUniqueInput.schema';
import { TopicKnowledgeBaseUpdateWithoutTopicInputObjectSchema as TopicKnowledgeBaseUpdateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUpdateWithoutTopicInput.schema';
import { TopicKnowledgeBaseUncheckedUpdateWithoutTopicInputObjectSchema as TopicKnowledgeBaseUncheckedUpdateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUncheckedUpdateWithoutTopicInput.schema';
import { TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema as TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseCreateWithoutTopicInput.schema';
import { TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema as TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUncheckedCreateWithoutTopicInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TopicKnowledgeBaseUpdateWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedUpdateWithoutTopicInputObjectSchema)]),
  create: z.union([z.lazy(() => TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema)])
}).strict();
export const TopicKnowledgeBaseUpsertWithWhereUniqueWithoutTopicInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpsertWithWhereUniqueWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpsertWithWhereUniqueWithoutTopicInput>;
export const TopicKnowledgeBaseUpsertWithWhereUniqueWithoutTopicInputObjectZodSchema = makeSchema();
