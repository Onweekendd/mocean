import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  agentId: z.string()
}).strict();
export const MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUncheckedCreateWithoutMcpServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUncheckedCreateWithoutMcpServerInput>;
export const MCPAgentServerUncheckedCreateWithoutMcpServerInputObjectZodSchema = makeSchema();
