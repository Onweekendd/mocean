import * as z from 'zod';
import { AssistantSchema } from './Assistant.schema';
import { GroupSchema } from './Group.schema';
import { KnowledgeBaseSchema } from './KnowledgeBase.schema';

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
  group: z.lazy(() => GroupSchema),
  assistants: z.array(z.lazy(() => AssistantSchema)),
  defaultForAssistants: z.array(z.lazy(() => AssistantSchema)),
  rerankFor: z.array(z.lazy(() => KnowledgeBaseSchema)),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ModelType = z.infer<typeof ModelSchema>;
