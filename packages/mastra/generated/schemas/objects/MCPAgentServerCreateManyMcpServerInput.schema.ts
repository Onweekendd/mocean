import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  agentId: z.string()
}).strict();
export const MCPAgentServerCreateManyMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAgentServerCreateManyMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCreateManyMcpServerInput>;
export const MCPAgentServerCreateManyMcpServerInputObjectZodSchema = makeSchema();
