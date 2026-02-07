import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  knowledgeBaseId: z.string()
}).strict();
export const TopicKnowledgeBaseCreateManyTopicInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateManyTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateManyTopicInput>;
export const TopicKnowledgeBaseCreateManyTopicInputObjectZodSchema = makeSchema();
