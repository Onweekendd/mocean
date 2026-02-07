import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  topicId: z.string(),
  knowledgeBaseId: z.string()
}).strict();
export const TopicKnowledgeBaseCreateManyInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateManyInput>;
export const TopicKnowledgeBaseCreateManyInputObjectZodSchema = makeSchema();
