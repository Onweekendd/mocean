import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicKnowledgeBaseTopicIdKnowledgeBaseIdCompoundUniqueInputObjectSchema as TopicKnowledgeBaseTopicIdKnowledgeBaseIdCompoundUniqueInputObjectSchema } from './TopicKnowledgeBaseTopicIdKnowledgeBaseIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  topicId_knowledgeBaseId: z.lazy(() => TopicKnowledgeBaseTopicIdKnowledgeBaseIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const TopicKnowledgeBaseWhereUniqueInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseWhereUniqueInput>;
export const TopicKnowledgeBaseWhereUniqueInputObjectZodSchema = makeSchema();
