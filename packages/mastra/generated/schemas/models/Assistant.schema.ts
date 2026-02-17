// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';
// Circular import removed: import { AssistantSettingsSchema } from './AssistantSettings.schema';
// Circular import removed: import { KnowledgeBaseSchema } from './KnowledgeBase.schema';
// Circular import removed: import { MCPAssistantServerSchema } from './MCPAssistantServer.schema';
// Circular import removed: import { ModelSchema } from './Model.schema';
// Circular import removed: import { ProviderSchema } from './Provider.schema';
// Circular import removed: import { TopicSchema } from './Topic.schema';

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
  model: z.lazy(() => _r.ModelSchema).nullish(),
  modelId: z.string().nullish(),
  provider: z.lazy(() => _r.ProviderSchema).nullish(),
  providerId: z.string().nullish(),
  defaultModel: z.lazy(() => _r.ModelSchema).nullish(),
  defaultModelId: z.string().nullish(),
  settings: z.lazy(() => _r.AssistantSettingsSchema).nullish(),
  topics: z.array(z.lazy(() => _r.TopicSchema)),
  knowledgeBases: z.array(z.lazy(() => _r.KnowledgeBaseSchema)),
  mcpServers: z.array(z.lazy(() => _r.MCPAssistantServerSchema)),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AssistantType = z.infer<typeof AssistantSchema>;

// Register to schema registry for circular reference resolution
_r.AssistantSchema = AssistantSchema;
