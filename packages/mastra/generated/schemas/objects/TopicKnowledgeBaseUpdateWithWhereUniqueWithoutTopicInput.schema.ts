import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './TopicKnowledgeBaseWhereUniqueInput.schema';
import { TopicKnowledgeBaseUpdateWithoutTopicInputObjectSchema as TopicKnowledgeBaseUpdateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUpdateWithoutTopicInput.schema';
import { TopicKnowledgeBaseUncheckedUpdateWithoutTopicInputObjectSchema as TopicKnowledgeBaseUncheckedUpdateWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUncheckedUpdateWithoutTopicInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopicKnowledgeBaseUpdateWithoutTopicInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedUpdateWithoutTopicInputObjectSchema)])
}).strict();
export const TopicKnowledgeBaseUpdateWithWhereUniqueWithoutTopicInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpdateWithWhereUniqueWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpdateWithWhereUniqueWithoutTopicInput>;
export const TopicKnowledgeBaseUpdateWithWhereUniqueWithoutTopicInputObjectZodSchema = makeSchema();
