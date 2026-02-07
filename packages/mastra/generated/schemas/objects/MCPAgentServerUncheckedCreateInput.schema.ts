import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  agentId: z.string(),
  mcpServerId: z.string()
}).strict();
export const MCPAgentServerUncheckedCreateInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUncheckedCreateInput>;
export const MCPAgentServerUncheckedCreateInputObjectZodSchema = makeSchema();
