import * as z from 'zod';
import { AgentGroupSchema } from './AgentGroup.schema';
import { AgentSchema } from './Agent.schema';

export const AgentAgentGroupSchema = z.object({
  agent: z.lazy(() => AgentSchema),
  agentId: z.string(),
  agentGroup: z.lazy(() => AgentGroupSchema),
  agentGroupId: z.string(),
});

export type AgentAgentGroupType = z.infer<typeof AgentAgentGroupSchema>;
