import * as z from 'zod';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { AgentAgentGroupSchema } from './AgentAgentGroup.schema';
import { AssistantSettingsSchema } from './AssistantSettings.schema';
import { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import { TopicSchema } from './Topic.schema';

export const AgentSchema = z.object({
  id: z.string(),
  name: z.string(),
  prompt: z.string(),
  type: z.string().default("agent"),
  emoji: z.string().nullish(),
  description: z.string().nullish(),
  enableWebSearch: z.boolean(),
  webSearchProviderId: z.string().nullish(),
  enableGenerateImage: z.boolean(),
  knowledgeRecognition: KnowledgeRecognitionSchema.nullish(),
  groups: z.array(z.lazy(() => AgentAgentGroupSchema)),
  settings: z.lazy(() => AssistantSettingsSchema).nullish(),
  topics: z.array(z.lazy(() => TopicSchema)),
  knowledgeBases: z.array(z.lazy(() => KnowledgeBaseSchema)),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AgentType = z.infer<typeof AgentSchema>;
