import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentArgsObjectSchema as AgentArgsObjectSchema } from './AgentArgs.schema';
import { MCPServerArgsObjectSchema as MCPServerArgsObjectSchema } from './MCPServerArgs.schema'

const makeSchema = () => z.object({
  agent: z.union([z.boolean(), z.lazy(() => AgentArgsObjectSchema)]).optional(),
  mcpServer: z.union([z.boolean(), z.lazy(() => MCPServerArgsObjectSchema)]).optional()
}).strict();
export const MCPAgentServerIncludeObjectSchema: z.ZodType<Prisma.MCPAgentServerInclude> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerInclude>;
export const MCPAgentServerIncludeObjectZodSchema = makeSchema();
