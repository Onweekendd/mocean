import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  knowledgeBaseId: z.string()
}).strict();
export const TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUncheckedCreateWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUncheckedCreateWithoutTopicInput>;
export const TopicKnowledgeBaseUncheckedCreateWithoutTopicInputObjectZodSchema = makeSchema();
