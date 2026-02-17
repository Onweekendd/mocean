// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
// Circular import removed: import { AgentSchema } from './Agent.schema';
// Circular import removed: import { AssistantSchema } from './Assistant.schema';
// Circular import removed: import { TopicKnowledgeBaseSchema } from './TopicKnowledgeBase.schema';

export const TopicSchema = z.object({
  id: z.string(),
  name: z.string(),
  prompt: z.string().nullish(),
  pinned: z.boolean(),
  isNameManuallyEdited: z.boolean(),
  assistant: z.lazy(() => _r.AssistantSchema).nullish(),
  assistantId: z.string().nullish(),
  agent: z.lazy(() => _r.AgentSchema).nullish(),
  agentId: z.string().nullish(),
  modelId: z.string().nullish(),
  knowledgeBases: z.array(z.lazy(() => _r.TopicKnowledgeBaseSchema)),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TopicType = z.infer<typeof TopicSchema>;

// Register to schema registry for circular reference resolution
_r.TopicSchema = TopicSchema;
