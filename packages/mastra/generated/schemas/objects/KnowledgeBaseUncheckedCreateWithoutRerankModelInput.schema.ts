import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantUncheckedCreateNestedManyWithoutKnowledgeBasesInputObjectSchema as AssistantUncheckedCreateNestedManyWithoutKnowledgeBasesInputObjectSchema } from './AssistantUncheckedCreateNestedManyWithoutKnowledgeBasesInput.schema';
import { AgentUncheckedCreateNestedManyWithoutKnowledgeBasesInputObjectSchema as AgentUncheckedCreateNestedManyWithoutKnowledgeBasesInputObjectSchema } from './AgentUncheckedCreateNestedManyWithoutKnowledgeBasesInput.schema';
import { KnowledgeItemUncheckedCreateNestedManyWithoutKnowledgeBaseInputObjectSchema as KnowledgeItemUncheckedCreateNestedManyWithoutKnowledgeBaseInputObjectSchema } from './KnowledgeItemUncheckedCreateNestedManyWithoutKnowledgeBaseInput.schema';
import { TopicKnowledgeBaseUncheckedCreateNestedManyWithoutKnowledgeBaseInputObjectSchema as TopicKnowledgeBaseUncheckedCreateNestedManyWithoutKnowledgeBaseInputObjectSchema } from './TopicKnowledgeBaseUncheckedCreateNestedManyWithoutKnowledgeBaseInput.schema'

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
  modelId: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  assistants: z.lazy(() => AssistantUncheckedCreateNestedManyWithoutKnowledgeBasesInputObjectSchema).optional(),
  agents: z.lazy(() => AgentUncheckedCreateNestedManyWithoutKnowledgeBasesInputObjectSchema).optional(),
  items: z.lazy(() => KnowledgeItemUncheckedCreateNestedManyWithoutKnowledgeBaseInputObjectSchema).optional(),
  topics: z.lazy(() => TopicKnowledgeBaseUncheckedCreateNestedManyWithoutKnowledgeBaseInputObjectSchema).optional()
}).strict();
export const KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectSchema: z.ZodType<Prisma.KnowledgeBaseUncheckedCreateWithoutRerankModelInput> = makeSchema() as unknown as z.ZodType<Prisma.KnowledgeBaseUncheckedCreateWithoutRerankModelInput>;
export const KnowledgeBaseUncheckedCreateWithoutRerankModelInputObjectZodSchema = makeSchema();
