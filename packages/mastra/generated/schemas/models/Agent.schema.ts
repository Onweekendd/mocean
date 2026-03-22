import * as z from 'zod';

export const AgentSchema = z.object({
  id: z.string(),
  name: z.string(),
  prompt: z.string(),
  type: z.string().default("agent"),
  emoji: z.string().nullish(),
  description: z.string().nullish(),

  createdAt: z.date(),
  updatedAt: z.date(),

});

export type AgentType = z.infer<typeof AgentSchema>;
