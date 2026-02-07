import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCreateNestedOneWithoutMcpServersInputObjectSchema as AgentCreateNestedOneWithoutMcpServersInputObjectSchema } from './AgentCreateNestedOneWithoutMcpServersInput.schema';
import { MCPServerCreateNestedOneWithoutAgentsInputObjectSchema as MCPServerCreateNestedOneWithoutAgentsInputObjectSchema } from './MCPServerCreateNestedOneWithoutAgentsInput.schema'

const makeSchema = () => z.object({
  agent: z.lazy(() => AgentCreateNestedOneWithoutMcpServersInputObjectSchema),
  mcpServer: z.lazy(() => MCPServerCreateNestedOneWithoutAgentsInputObjectSchema)
}).strict();
export const MCPAgentServerCreateInputObjectSchema: z.ZodType<Prisma.MCPAgentServerCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCreateInput>;
export const MCPAgentServerCreateInputObjectZodSchema = makeSchema();
