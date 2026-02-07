import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateNestedManyWithoutKnowledgeBasesInputObjectSchema as AssistantCreateNestedManyWithoutKnowledgeBasesInputObjectSchema } from './AssistantCreateNestedManyWithoutKnowledgeBasesInput.schema';
import { AgentCreateNestedManyWithoutKnowledgeBasesInputObjectSchema as AgentCreateNestedManyWithoutKnowledgeBasesInputObjectSchema } from './AgentCreateNestedManyWithoutKnowledgeBasesInput.schema';
import { ModelCreateNestedOneWithoutRerankForInputObjectSchema as ModelCreateNestedOneWithoutRerankForInputObjectSchema } from './ModelCreateNestedOneWithoutRerankForInput.schema';
import { KnowledgeItemCreateNestedManyWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemCreateNestedManyWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemCreateNestedManyWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseCreateNestedManyWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseCreateNestedManyWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseCreateNestedManyWithoutKnowledgeBaseInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  dimensions: z.number().int(),
  description: z.string().optional().nullable(),
  documentCount: z.number().int().optional().nullable(),
  chunkSize: z.number().int().optional().nullable(),
  chunkOverlap: z.number().int().optional().nullable(),
  threshold: z.number().optional().nullable(),
  version: z.number().int(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  assistants: z.lazy(() => AssistantCreateNestedManyWithoutKnowledgeBasesInputObjectSchema).optional(),
  agents: z.lazy(() => AgentCreateNestedManyWithoutKnowledgeBasesInputObjectSchema).optional(),
  rerankModel: z.lazy(() => ModelCreateNestedOneWithoutRerankForInputObjectSchema).optional(),
  items: z.lazy(() => KnowledgeItemCreateNestedManyWithoutKnowledgeBaseInputObjectSchema).optional(),
  topics: z.lazy(() => TopicKnowledgeBaseCreateNestedManyWithoutKnowledgeBaseInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseCreateWithoutModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseCreateWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseCreateWithoutModelInput>;
export const KnowledgeBaseCreateWithoutModelInputObjectZodSchema = makeSchema();
