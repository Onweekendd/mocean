import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateNestedOneWithoutKnowledgeBasesInputObjectSchema as TopicCreateNestedOneWithoutKnowledgeBasesInputObjectSchema } from './TopicCreateNestedOneWithoutKnowledgeBasesInput.schema'

const makeSchema = () => z.object({
  topic: z.lazy(() => TopicCreateNestedOneWithoutKnowledgeBasesInputObjectSchema)
}).strict();
export const TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateWithoutKnowledgeBaseInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateWithoutKnowledgeBaseInput>;
export const TopicKnowledgeBaseCreateWithoutKnowledgeBaseInputObjectZodSchema = makeSchema();
