// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
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
  assistants: z.array(z.lazy(() => {
      const mod = require('./Assistant.schema');
      return mod.AssistantSchema;
    })),
  agents: z.array(z.lazy(() => {
      const mod = require('./Agent.schema');
      return mod.AgentSchema;
    })),
  modelId: z.string(),
  rerankModel: z.lazy(() => {
      const mod = require('./Model.schema');
      return mod.ModelSchema;
    }).nullish(),
  rerankModelId: z.string().nullish(),
  items: z.array(z.lazy(() => {
      const mod = require('./KnowledgeItem.schema');
      return mod.KnowledgeItemSchema;
    })),
  topics: z.array(z.lazy(() => {
      const mod = require('./TopicKnowledgeBase.schema');
      return mod.TopicKnowledgeBaseSchema;
    })),
  created_at: z.date(),
  updated_at: z.date(),
});

export type KnowledgeBaseType = z.infer<typeof KnowledgeBaseSchema>;
