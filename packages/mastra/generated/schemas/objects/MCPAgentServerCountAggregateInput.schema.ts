import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  agentId: z.literal(true).optional(),
  mcpServerId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MCPAgentServerCountAggregateInputObjectSchema: z.ZodType<Prisma.MCPAgentServerCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerCountAggregateInputType>;
export const MCPAgentServerCountAggregateInputObjectZodSchema = makeSchema();
