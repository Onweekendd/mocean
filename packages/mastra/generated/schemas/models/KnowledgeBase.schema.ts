import * as z from 'zod';
import { AgentSchema } from './Agent.schema';
import { AssistantSchema } from './Assistant.schema';
import { KnowledgeItemSchema } from './KnowledgeItem.schema';
import { ModelSchema } from './Model.schema';
import { TopicKnowledgeBaseSchema } from './TopicKnowledgeBase.schema';

export const KnowledgeBaseSchema = z.object({
  id: z.string(),
  name: z.string(),
  dimensions: z.number().int(),
  description: z.string().nullish(),
  documentCount: z.number().int().nullish(),
  chunkSize: z.number().int().nullish(),
  chunkOverlap: z.number().int().nullish(),
  threshold: z.number().nullish(),
  version: z.number().int(),
  assistants: z.array(z.lazy(() => AssistantSchema)),
  agents: z.array(z.lazy(() => AgentSchema)),
  modelId: z.string(),
  rerankModel: z.lazy(() => ModelSchema).nullish(),
  rerankModelId: z.string().nullish(),
  items: z.array(z.lazy(() => KnowledgeItemSchema)),
  topics: z.array(z.lazy(() => TopicKnowledgeBaseSchema)),
  created_at: z.date(),
  updated_at: z.date(),
});

export type KnowledgeBaseType = z.infer<typeof KnowledgeBaseSchema>;
