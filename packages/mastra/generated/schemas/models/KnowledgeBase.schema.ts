// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
// Circular import removed: import { AgentSchema } from './Agent.schema';
// Circular import removed: import { AssistantSchema } from './Assistant.schema';
// Circular import removed: import { KnowledgeItemSchema } from './KnowledgeItem.schema';
// Circular import removed: import { ModelSchema } from './Model.schema';
// Circular import removed: import { TopicKnowledgeBaseSchema } from './TopicKnowledgeBase.schema';

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
  assistants: z.array(z.lazy(() => _r.AssistantSchema)),
  agents: z.array(z.lazy(() => _r.AgentSchema)),
  modelId: z.string(),
  rerankModel: z.lazy(() => _r.ModelSchema).nullish(),
  rerankModelId: z.string().nullish(),
  items: z.array(z.lazy(() => _r.KnowledgeItemSchema)),
  topics: z.array(z.lazy(() => _r.TopicKnowledgeBaseSchema)),
  created_at: z.date(),
  updated_at: z.date(),
});

export type KnowledgeBaseType = z.infer<typeof KnowledgeBaseSchema>;

// Register to schema registry for circular reference resolution
_r.KnowledgeBaseSchema = KnowledgeBaseSchema;
