import * as z from 'zod';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
import { AssistantSettingsSchema } from './AssistantSettings.schema';
import { KnowledgeBaseSchema } from './KnowledgeBase.schema';
import { ModelSchema } from './Model.schema';
import { TopicSchema } from './Topic.schema';

export const AssistantSchema = z.object({
  id: z.string(),
  name: z.string(),
  prompt: z.string(),
  type: z.string().default("assistant"),
  emoji: z.string().nullish(),
  description: z.string().nullish(),
  enableWebSearch: z.boolean(),
  webSearchProviderId: z.string().nullish(),
  enableGenerateImage: z.boolean(),
  knowledgeRecognition: KnowledgeRecognitionSchema.nullish(),
  modelId: z.string().nullish(),
  providerId: z.string().nullish(),
  defaultModel: z.lazy(() => ModelSchema).nullish(),
  defaultModelId: z.string().nullish(),
  settings: z.lazy(() => AssistantSettingsSchema).nullish(),
  topics: z.array(z.lazy(() => TopicSchema)),
  knowledgeBases: z.array(z.lazy(() => KnowledgeBaseSchema)),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AssistantType = z.infer<typeof AssistantSchema>;
