// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: import { AgentSchema } from './Agent.schema';
// Circular import removed: import { AssistantSchema } from './Assistant.schema';
// Circular import removed: import { ModelSchema } from './Model.schema';
// Circular import removed: import { TopicKnowledgeBaseSchema } from './TopicKnowledgeBase.schema';

export const TopicSchema = z.object({
  id: z.string(),
  name: z.string(),
  prompt: z.string().nullish(),
  pinned: z.boolean(),
  isNameManuallyEdited: z.boolean(),
  assistant: z.lazy(() => {
      const mod = require('./Assistant.schema');
      return mod.AssistantSchema;
    }).nullish(),
  assistantId: z.string().nullish(),
  agent: z.lazy(() => {
      const mod = require('./Agent.schema');
      return mod.AgentSchema;
    }).nullish(),
  agentId: z.string().nullish(),
  modelId: z.string().nullish(),
  model: z.lazy(() => {
      const mod = require('./Model.schema');
      return mod.ModelSchema;
    }).nullish(),
  knowledgeBases: z.array(z.lazy(() => {
      const mod = require('./TopicKnowledgeBase.schema');
      return mod.TopicKnowledgeBaseSchema;
    })),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TopicType = z.infer<typeof TopicSchema>;
