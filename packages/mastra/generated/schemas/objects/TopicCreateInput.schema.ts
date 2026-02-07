import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateNestedOneWithoutTopicsInputObjectSchema as AssistantCreateNestedOneWithoutTopicsInputObjectSchema } from './AssistantCreateNestedOneWithoutTopicsInput.schema';
import { AgentCreateNestedOneWithoutTopicsInputObjectSchema as AgentCreateNestedOneWithoutTopicsInputObjectSchema } from './AgentCreateNestedOneWithoutTopicsInput.schema';
import { ModelCreateNestedOneWithoutTopicInputObjectSchema as ModelCreateNestedOneWithoutTopicInputObjectSchema } from './ModelCreateNestedOneWithoutTopicInput.schema';
import { TopicKnowledgeBaseCreateNestedManyWithoutTopicInputObjectSchema as TopicKnowledgeBaseCreateNestedManyWithoutTopicInputObjectSchema } from './TopicKnowledgeBaseCreateNestedManyWithoutTopicInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  prompt: z.string().optional().nullable(),
  pinned: z.boolean().optional(),
  isNameManuallyEdited: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  assistant: z.lazy(() => AssistantCreateNestedOneWithoutTopicsInputObjectSchema).optional(),
  agent: z.lazy(() => AgentCreateNestedOneWithoutTopicsInputObjectSchema).optional(),
  model: z.lazy(() => ModelCreateNestedOneWithoutTopicInputObjectSchema).optional(),
  knowledgeBases: z.lazy(() => TopicKnowledgeBaseCreateNestedManyWithoutTopicInputObjectSchema).optional()
}).strict();
export const TopicCreateInputObjectSchema: z.ZodType<Prisma.TopicCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateInput>;
export const TopicCreateInputObjectZodSchema = makeSchema();
