import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentArgsObjectSchema as AgentArgsObjectSchema } from './AgentArgs.schema';
import { MCPServerArgsObjectSchema as MCPServerArgsObjectSchema } from './MCPServerArgs.schema'

const makeSchema = () => z.object({
  agent: z.union([z.boolean(), z.lazy(() => AgentArgsObjectSchema)]).optional(),
  agentId: z.boolean().optional(),
  mcpServer: z.union([z.boolean(), z.lazy(() => MCPServerArgsObjectSchema)]).optional(),
  mcpServerId: z.boolean().optional()
}).strict();
export const MCPAgentServerSelectObjectSchema: z.ZodType<Prisma.MCPAgentServerSelect> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerSelect>;
export const MCPAgentServerSelectObjectZodSchema = makeSchema();
