import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseWhereUniqueInputObjectSchema as TopicKnowledgeBaseWhereUniqueInputObjectSchema } from './TopicKnowledgeBaseWhereUniqueInput.schema';
import { TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUncheckedUpdateWithoutKnowledgeBaseInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TopicKnowledgeBaseWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInputObjectSchema), z.lazy(() => TopicKnowledgeBaseUncheckedUpdateWithoutKnowledgeBaseInputObjectSchema)])
}).strict();
export const TopicKnowledgeBaseUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpdateWithWhereUniqueWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpdateWithWhereUniqueWithoutKnowledgeBaseInput>;
export const TopicKnowledgeBaseUpdateWithWhereUniqueWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
