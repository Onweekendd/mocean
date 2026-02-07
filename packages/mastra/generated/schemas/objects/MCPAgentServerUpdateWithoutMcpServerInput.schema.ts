import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema as AgentUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema } from './AgentUpdateOneRequiredWithoutMcpServersNestedInput.schema'

const makeSchema = () => z.object({
  agent: z.lazy(() => AgentUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema).optional()
}).strict();
export const MCPAgentServerUpdateWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUpdateWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUpdateWithoutMcpServerInput>;
export const MCPAgentServerUpdateWithoutMcpServerInputObjectZodSchema = makeSchema();
