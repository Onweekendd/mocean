import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  topicId: z.string(),
  knowledgeBaseId: z.string()
}).strict();
export const TopicKnowledgeBaseUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUncheckedCreateInput>;
export const TopicKnowledgeBaseUncheckedCreateInputObjectZodSchema = makeSchema();
