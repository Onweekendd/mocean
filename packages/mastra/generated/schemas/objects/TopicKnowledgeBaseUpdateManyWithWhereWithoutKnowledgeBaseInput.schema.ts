import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseScalarWhereInputObjectSchema as TopicKnowledgeBaseScalarWhereInputObjectSchema } from './TopicKnowledgeBaseScalarWhereInput.schema';
import { TopicKnowledgeBaseUpdateManyMutationInputObjectSchema as TopicKnowledgeBaseUpdateManyMutationInputObjectSchema } from './TopicKnowledgeBaseUpdateManyMutationInput.schema';
import { TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicKnowledgeBaseScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TopicKnowledgeBaseUpdateManyMutationInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedUpdateManyWithoutKnowledgeBaseInputObjectSchema)])
}).strict();
export const TopicKnowledgeBaseUpdateManyWithWhereWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpdateManyWithWhereWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpdateManyWithWhereWithoutKnowledgeBaseInput>;
export const TopicKnowledgeBaseUpdateManyWithWhereWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
