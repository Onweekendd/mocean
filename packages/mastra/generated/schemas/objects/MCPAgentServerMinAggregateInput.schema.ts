import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  agentId: z.literal(true).optional(),
  mcpServerId: z.literal(true).optional()
}).strict();
export const MCPAgentServerMinAggregateInputObjectSchema: z.ZodType<Prisma.MCPAgentServerMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerMinAggregateInputType>;
export const MCPAgentServerMinAggregateInputObjectZodSchema = makeSchema();
