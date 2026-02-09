// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
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
  model: z.lazy(() => {
      const mod = require('./Model.schema');
      return mod.ModelSchema;
    }).nullish(),
  modelId: z.string().nullish(),
  provider: z.lazy(() => {
      const mod = require('./Provider.schema');
      return mod.ProviderSchema;
    }).nullish(),
  providerId: z.string().nullish(),
  defaultModel: z.lazy(() => {
      const mod = require('./Model.schema');
      return mod.ModelSchema;
    }).nullish(),
  defaultModelId: z.string().nullish(),
  settings: z.lazy(() => {
      const mod = require('./AssistantSettings.schema');
      return mod.AssistantSettingsSchema;
    }).nullish(),
  topics: z.array(z.lazy(() => {
      const mod = require('./Topic.schema');
      return mod.TopicSchema;
    })),
  knowledgeBases: z.array(z.lazy(() => {
      const mod = require('./KnowledgeBase.schema');
      return mod.KnowledgeBaseSchema;
    })),
  mcpServers: z.array(z.lazy(() => {
      const mod = require('./MCPAssistantServer.schema');
      return mod.MCPAssistantServerSchema;
    })),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AssistantType = z.infer<typeof AssistantSchema>;
