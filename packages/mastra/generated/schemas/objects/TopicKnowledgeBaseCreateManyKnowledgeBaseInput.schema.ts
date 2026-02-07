import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  topicId: z.string()
}).strict();
export const TopicKnowledgeBaseCreateManyKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateManyKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateManyKnowledgeBaseInput>;
export const TopicKnowledgeBaseCreateManyKnowledgeBaseInputObjectZodSchema = makeSchema();
