import * as z from 'zod';

export const AgentAgentGroupSchema = z.object({

  agentId: z.string(),

  agentGroupId: z.string(),
});

export type AgentAgentGroupType = z.infer<typeof AgentAgentGroupSchema>;
