import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  mcpServerId: z.string()
}).strict();
export const MCPAgentServerCreateManyAgentInputObjectSchema: z.ZodType<Prisma.MCPAgentServerCreateManyAgentInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCreateManyAgentInput>;
export const MCPAgentServerCreateManyAgentInputObjectZodSchema = makeSchema();
