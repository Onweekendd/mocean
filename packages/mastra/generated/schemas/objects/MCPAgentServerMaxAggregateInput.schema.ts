import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  agentId: z.literal(true).optional(),
  mcpServerId: z.literal(true).optional()
}).strict();
export const MCPAgentServerMaxAggregateInputObjectSchema: z.ZodType<Prisma.MCPAgentServerMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerMaxAggregateInputType>;
export const MCPAgentServerMaxAggregateInputObjectZodSchema = makeSchema();
