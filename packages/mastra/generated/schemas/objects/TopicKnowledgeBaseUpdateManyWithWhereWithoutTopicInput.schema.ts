import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseScalarWhereInputObjectSchema as TopicKnowledgeBaseScalarWhereInputObjectSchema } from './TopicKnowledgeBaseScalarWhereInput.schema';
import { TopicKnowledgeBaseUpdateManyMutationInputObjectSchema as TopicKnowledgeBaseUpdateManyMutationInputObjectSchema } from './TopicKnowledgeBaseUpdateManyMutationInput.schema';
import { TopicKnowledgeBaseUncheckedUpdateManyWithoutTopicInputObjectSchema as TopicKnowledgeBaseUncheckedUpdateManyWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseUncheckedUpdateManyWithoutTopicInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicKnowledgeBaseScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopicKnowledgeBaseUpdateManyMutationInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedUpdateManyWithoutTopicInputObjectSchema)])
}).strict();
export const TopicKnowledgeBaseUpdateManyWithWhereWithoutTopicInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpdateManyWithWhereWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpdateManyWithWhereWithoutTopicInput>;
export const TopicKnowledgeBaseUpdateManyWithWhereWithoutTopicInputObjectZodSchema = makeSchema();
