import * as z from 'zod';

export const TopicSchema = z.object({
  id: z.string(),
  name: z.string(),
  prompt: z.string().nullish(),
  pinned: z.boolean(),
  isNameManuallyEdited: z.boolean(),
  assistantId: z.string().nullish(),
  agentId: z.string().nullish(),
  modelId: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TopicType = z.infer<typeof TopicSchema>;
