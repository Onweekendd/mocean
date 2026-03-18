import * as z from 'zod';
import { AgentSchema } from './Agent.schema';
import { AssistantSchema } from './Assistant.schema';
import { TopicKnowledgeBaseSchema } from './TopicKnowledgeBase.schema';

export const TopicSchema = z.object({
  id: z.string(),
  name: z.string(),
  prompt: z.string().nullish(),
  pinned: z.boolean(),
  isNameManuallyEdited: z.boolean(),
  assistant: z.lazy(() => AssistantSchema).nullish(),
  assistantId: z.string().nullish(),
  agent: z.lazy(() => AgentSchema).nullish(),
  agentId: z.string().nullish(),
  modelId: z.string().nullish(),
  knowledgeBases: z.array(z.lazy(() => TopicKnowledgeBaseSchema)),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TopicType = z.infer<typeof TopicSchema>;
