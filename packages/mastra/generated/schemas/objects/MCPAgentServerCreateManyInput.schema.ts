import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  agentId: z.string(),
  mcpServerId: z.string()
}).strict();
export const MCPAgentServerCreateManyInputObjectSchema: z.ZodType<Prisma.MCPAgentServerCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCreateManyInput>;
export const MCPAgentServerCreateManyInputObjectZodSchema = makeSchema();
