import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AgentCreateNestedOneWithoutMcpServersInputObjectSchema as AgentCreateNestedOneWithoutMcpServersInputObjectSchema } from './AgentCreateNestedOneWithoutMcpServersInput.schema'

const makeSchema = () => z.object({
  agent: z.lazy(() => AgentCreateNestedOneWithoutMcpServersInputObjectSchema)
}).strict();
export const MCPAgentServerCreateWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAgentServerCreateWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCreateWithoutMcpServerInput>;
export const MCPAgentServerCreateWithoutMcpServerInputObjectZodSchema = makeSchema();
