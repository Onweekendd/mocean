import * as z from 'zod';
import { AgentAgentGroupSchema } from './AgentAgentGroup.schema';

export const AgentGroupSchema = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string(),
  agents: z.array(z.lazy(() => AgentAgentGroupSchema)),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type AgentGroupType = z.infer<typeof AgentGroupSchema>;
