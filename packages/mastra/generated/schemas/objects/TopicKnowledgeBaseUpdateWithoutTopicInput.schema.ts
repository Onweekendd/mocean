import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInputObjectSchema as KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInputObjectSchema } from './KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInput.schema'

const makeSchema = () => z.object({
  knowledgeBase: z.lazy(() => KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInputObjectSchema).optional()
}).strict();
export const TopicKnowledgeBaseUpdateWithoutTopicInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpdateWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpdateWithoutTopicInput>;
export const TopicKnowledgeBaseUpdateWithoutTopicInputObjectZodSchema = makeSchema();
