import * as z from 'zod';
import { AssistantSchema } from './Assistant.schema';
import { AssistantSettingsSchema } from './AssistantSettings.schema';
import { KnowledgeBaseSchema } from './KnowledgeBase.schema';
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
  assistants: z.array(z.lazy(() => AssistantSchema)),
  defaultForAssistants: z.array(z.lazy(() => AssistantSchema)),
  assistantSettings: z.array(z.lazy(() => AssistantSettingsSchema)),
  rerankFor: z.array(z.lazy(() => KnowledgeBaseSchema)),
  Topic: z.array(z.lazy(() => TopicSchema)),
});

export type ModelType = z.infer<typeof ModelSchema>;
