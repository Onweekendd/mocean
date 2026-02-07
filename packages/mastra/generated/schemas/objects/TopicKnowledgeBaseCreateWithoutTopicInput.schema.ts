import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { KnowledgeBaseCreateNestedOneWithoutTopicsInputObjectSchema as KnowledgeBaseCreateNestedOneWithoutTopicsInputObjectSchema } from './KnowledgeBaseCreateNestedOneWithoutTopicsInput.schema'

const makeSchema = () => z.object({
  knowledgeBase: z.lazy(() => KnowledgeBaseCreateNestedOneWithoutTopicsInputObjectSchema)
}).strict();
export const TopicKnowledgeBaseCreateWithoutTopicInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateWithoutTopicInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateWithoutTopicInput>;
export const TopicKnowledgeBaseCreateWithoutTopicInputObjectZodSchema = makeSchema();
