import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { TopicCreateNestedOneWithoutKnowledgeBasesInputObjectSchema as TopicCreateNestedOneWithoutKnowledgeBasesInputObjectSchema } from './TopicCreateNestedOneWithoutKnowledgeBasesInput.schema';
import { KnowledgeBaseCreateNestedOneWithoutTopicsInputObjectSchema as KnowledgeBaseCreateNestedOneWithoutTopicsInputObjectSchema } from './KnowledgeBaseCreateNestedOneWithoutTopicsInput.schema'

const makeSchema = () => z.object({
  topic: z.lazy(() => TopicCreateNestedOneWithoutKnowledgeBasesInputObjectSchema),
  knowledgeBase: z.lazy(() => KnowledgeBaseCreateNestedOneWithoutTopicsInputObjectSchema)
}).strict();
export const TopicKnowledgeBaseCreateInputObjectSchema: z.ZodType<Prisma.TopicKnowledgeBaseCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicKnowledgeBaseCreateInput>;
export const TopicKnowledgeBaseCreateInputObjectZodSchema = makeSchema();
