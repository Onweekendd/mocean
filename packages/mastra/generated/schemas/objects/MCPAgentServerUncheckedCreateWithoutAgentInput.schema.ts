import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  mcpServerId: z.string()
}).strict();
export const MCPAgentServerUncheckedCreateWithoutAgentInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUncheckedCreateWithoutAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUncheckedCreateWithoutAgentInput>;
export const MCPAgentServerUncheckedCreateWithoutAgentInputObjectZodSchema = makeSchema();
