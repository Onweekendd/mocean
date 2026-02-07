import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema as AgentUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema } from './AgentUpdateOneRequiredWithoutMcpServersNestedInput.schema';
import { MCPServerUpdateOneRequiredWithoutAgentsNestedInputObjectSchema as MCPServerUpdateOneRequiredWithoutAgentsNestedInputObjectSchema } from './MCPServerUpdateOneRequiredWithoutAgentsNestedInput.schema'

const makeSchema = () => z.object({
  agent: z.lazy(() => AgentUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema).optional(),
  mcpServer: z.lazy(() => MCPServerUpdateOneRequiredWithoutAgentsNestedInputObjectSchema).optional()
}).strict();
export const MCPAgentServerUpdateInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUpdateInput>;
export const MCPAgentServerUpdateInputObjectZodSchema = makeSchema();
