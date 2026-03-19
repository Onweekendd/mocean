import * as z from 'zod';

export const AgentGroupSchema = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AgentGroupType = z.infer<typeof AgentGroupSchema>;
