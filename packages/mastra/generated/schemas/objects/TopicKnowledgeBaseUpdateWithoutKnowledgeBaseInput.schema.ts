import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectSchema as TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectSchema } from './TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInput.schema'

const makeSchema = () => z.object({
  topic: z.lazy(() => TopicUpdateOneRequiredWithoutKnowledgeBasesNestedInputObjectSchema).optional()
}).strict();
export const TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInput>;
export const TopicKnowledgeBaseUpdateWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
