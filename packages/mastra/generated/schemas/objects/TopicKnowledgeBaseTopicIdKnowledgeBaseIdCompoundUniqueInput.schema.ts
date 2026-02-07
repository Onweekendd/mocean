import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  topicId: z.string(),
  knowledgeBaseId: z.string()
}).strict();
export const TopicKnowledgeBaseTopicIdKnowledgeBaseIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseTopicIdKnowledgeBaseIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseTopicIdKnowledgeBaseIdCompoundUniqueInput>;
export const TopicKnowledgeBaseTopicIdKnowledgeBaseIdCompoundUniqueInputObjectZodSchema = makeSchema();
