import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  topicId: z.string()
}).strict();
export const TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInput>;
export const TopicKnowledgeBaseUncheckedCreateWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
