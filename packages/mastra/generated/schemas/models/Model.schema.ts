// @ts-nocheck - Circular imports resolved with runtime require()
import * as z from 'zod';
// Circular import removed: // Circular import removed: import { AssistantSchema } from './Assistant.schema';

import { AssistantSettingsSchema } from './AssistantSettings.schema';
// Circular import removed: // Circular import removed: import { KnowledgeBaseSchema } from './KnowledgeBase.schema';

import { TopicSchema } from './Topic.schema';

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
  assistants: z.array(z.lazy(() => {
      const mod = require('./Assistant.schema');
      return mod.AssistantSchema;
    })),
  defaultForAssistants: z.array(z.lazy(() => {
      const mod = require('./Assistant.schema');
      return mod.AssistantSchema;
    })),
  assistantSettings: z.array(z.lazy(() => AssistantSettingsSchema)),
  rerankFor: z.array(z.lazy(() => {
      const mod = require('./KnowledgeBase.schema');
      return mod.KnowledgeBaseSchema;
    })),
  Topic: z.array(z.lazy(() => TopicSchema)),
});

export type ModelType = z.infer<typeof ModelSchema>;
