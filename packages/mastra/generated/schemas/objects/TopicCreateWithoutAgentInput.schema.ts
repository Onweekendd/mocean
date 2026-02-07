import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateNestedOneWithoutTopicsInputObjectSchema as AssistantCreateNestedOneWithoutTopicsInputObjectSchema } from './AssistantCreateNestedOneWithoutTopicsInput.schema';
import { ModelCreateNestedOneWithoutTopicInputObjectSchema as ModelCreateNestedOneWithoutTopicInputObjectSchema } from './ModelCreateNestedOneWithoutTopicInput.schema';
import { TopicKnowledgeBaseCreateNestedManyWithoutTopicInputObjectSchema as TopicKnowledgeBaseCreateNestedManyWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseCreateNestedManyWithoutTopicInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  prompt: z.string().optional().nullable(),
  pinned: z.boolean().optional(),
  isNameManuallyEdited: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  assistant: z.lazy(() => AssistantCreateNestedOneWithoutTopicsInputObjectSchema).optional(),
  model: z.lazy(() => ModelCreateNestedOneWithoutTopicInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => TopicKnowledgeBaseCreateNestedManyWithoutTopicInputObjectSchema).optional()
}).strict();
export const TopicCreateWithoutAgentInputObjectSchema: z.ZodType<Prisma.TopicCreateWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateWithoutAgentInput>;
export const TopicCreateWithoutAgentInputObjectZodSchema = makeSchema();
