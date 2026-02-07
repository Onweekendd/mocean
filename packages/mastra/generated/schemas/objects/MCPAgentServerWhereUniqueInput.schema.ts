import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAgentServerAgentIdMcpServerIdCompoundUniqueInputObjectSchema as MCPAgentServerAgentIdMcpServerIdCompoundUniqueInputObjectSchema } from './MCPAgentServerAgentIdMcpServerIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  agentId_mcpServerId: z.lazy(() => MCPAgentServerAgentIdMcpServerIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const MCPAgentServerWhereUniqueInputObjectSchema: z.ZodType<Prisma.MCPAgentServerWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerWhereUniqueInput>;
export const MCPAgentServerWhereUniqueInputObjectZodSchema = makeSchema();
