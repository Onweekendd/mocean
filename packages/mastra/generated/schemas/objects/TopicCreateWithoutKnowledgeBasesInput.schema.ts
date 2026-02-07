import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateNestedOneWithoutTopicsInputObjectSchema as AssistantCreateNestedOneWithoutTopicsInputObjectSchema } from './AssistantCreateNestedOneWithoutTopicsInput.schema';
import { AgentCreateNestedOneWithoutTopicsInputObjectSchema as AgentCreateNestedOneWithoutTopicsInputObjectSchema } from './AgentCreateNestedOneWithoutTopicsInput.schema';
import { ModelCreateNestedOneWithoutTopicInputObjectSchema as ModelCreateNestedOneWithoutTopicInputObjectSchema } from './ModelCreateNestedOneWithoutTopicInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  prompt: z.string().optional().nullable(),
  pinned: z.boolean().optional(),
  isNameManuallyEdited: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  assistant: z.lazy(() => AssistantCreateNestedOneWithoutTopicsInputObjectSchema).optional(),
  agent: z.lazy(() => AgentCreateNestedOneWithoutTopicsInputObjectSchema).optional(),
  model: z.lazy(() => ModelCreateNestedOneWithoutTopicInputObjectSchema).optional()
}).strict();
export const TopicCreateWithoutKnowledgeBasesInputObjectSchema: z.ZodType<Prisma.TopicCreateWithoutKnowledgeBasesInput> = makeSchema() as unknown as z.ZodType<Prisma.TopicCreateWithoutKnowledgeBasesInput>;
export const TopicCreateWithoutKnowledgeBasesInputObjectZodSchema = makeSchema();
