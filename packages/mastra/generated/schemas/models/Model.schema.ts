// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: import { AssistantSchema } from './Assistant.schema';
// Circular import removed: import { AssistantSettingsSchema } from './AssistantSettings.schema';
// Circular import removed: import { GroupSchema } from './Group.schema';
// Circular import removed: import { KnowledgeBaseSchema } from './KnowledgeBase.schema';
// Circular import removed: import { TopicSchema } from './Topic.schema';

export const ModelSchema = z.object({
  id: z.string(),
  name: z.string(),
  owned_by: z.string().nullish(),
  description: z.string().nullish(),
  isSystem: z.boolean(),
  contextLength: z.number().int().nullish(),
  supportsAttachments: z.boolean(),
  supportsTools: z.boolean(),
  supportsReasoning: z.boolean(),
  supportsImage: z.boolean(),
  supportsAudio: z.boolean(),
  supportsVideo: z.boolean(),
  supportsEmbedding: z.boolean(),
  inputPricePerMillion: z.number().nullish(),
  outputPricePerMillion: z.number().nullish(),
  groupId: z.string(),
  group: z.lazy(() => {
      const mod = require('./Group.schema');
      return mod.GroupSchema;
    }),
  assistants: z.array(z.lazy(() => {
      const mod = require('./Assistant.schema');
      return mod.AssistantSchema;
    })),
  defaultForAssistants: z.array(z.lazy(() => {
      const mod = require('./Assistant.schema');
      return mod.AssistantSchema;
    })),
  knowledgeBases: z.array(z.lazy(() => {
      const mod = require('./KnowledgeBase.schema');
      return mod.KnowledgeBaseSchema;
    })),
  assistantSettings: z.array(z.lazy(() => {
      const mod = require('./AssistantSettings.schema');
      return mod.AssistantSettingsSchema;
    })),
  rerankFor: z.array(z.lazy(() => {
      const mod = require('./KnowledgeBase.schema');
      return mod.KnowledgeBaseSchema;
    })),
  Topic: z.array(z.lazy(() => {
      const mod = require('./Topic.schema');
      return mod.TopicSchema;
    })),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ModelType = z.infer<typeof ModelSchema>;
