import * as z from 'zod';
import { KnowledgeRecognitionSchema } from '../enums/KnowledgeRecognition.schema';

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

  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AssistantType = z.infer<typeof AssistantSchema>;
