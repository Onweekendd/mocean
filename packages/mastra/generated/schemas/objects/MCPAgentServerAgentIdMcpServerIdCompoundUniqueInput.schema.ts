import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  agentId: z.string(),
  mcpServerId: z.string()
}).strict();
export const MCPAgentServerAgentIdMcpServerIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.MCPAgentServerAgentIdMcpServerIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerAgentIdMcpServerIdCompoundUniqueInput>;
export const MCPAgentServerAgentIdMcpServerIdCompoundUniqueInputObjectZodSchema = makeSchema();
