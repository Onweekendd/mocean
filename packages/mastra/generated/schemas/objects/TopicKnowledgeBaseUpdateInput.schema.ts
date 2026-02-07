import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectSchema as TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectSchema } from './TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInput.schema';
import { KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInputObjectSchema as KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInputObjectSchema } from './KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInput.schema'

const makeSchema = () => z.object({
  topic: z.lazy(() => TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectSchema).optional(),
  knowledgeBase: z.lazy(() => KnowledgeBaseUpdateOneRequiredWithoutTopicsNestedInputObjectSchema).optional()
}).strict();
export const TopicKnowledgeBaseUpdateInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpdateInput>;
export const TopicKnowledgeBaseUpdateInputObjectZodSchema = makeSchema();
