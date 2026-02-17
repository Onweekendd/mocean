// @ts-nocheck - Circular imports resolved with schema registry
import * as z from 'zod';
import { _r } from './_registry';
// Circular import removed: import { AssistantSchema } from './Assistant.schema';
// Circular import removed: import { GroupSchema } from './Group.schema';
// Circular import removed: import { KnowledgeBaseSchema } from './KnowledgeBase.schema';

export const ModelSchema = z.object({
  id: z.string(),
  name: z.string(),
  owned_by: z.string().nullish(),
  description: z.string().nullish(),
  isSystem: z.boolean(),
  sort: z.number().int(),
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
  group: z.lazy(() => _r.GroupSchema),
  assistants: z.array(z.lazy(() => _r.AssistantSchema)),
  defaultForAssistants: z.array(z.lazy(() => _r.AssistantSchema)),
  rerankFor: z.array(z.lazy(() => _r.KnowledgeBaseSchema)),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ModelType = z.infer<typeof ModelSchema>;

// Register to schema registry for circular reference resolution
_r.ModelSchema = ModelSchema;
