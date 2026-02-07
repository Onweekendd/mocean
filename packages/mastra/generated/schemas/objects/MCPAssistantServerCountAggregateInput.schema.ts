import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  assistantId: z.literal(true).optional(),
  mcpServerId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const MCPAssistantServerCountAggregateInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerCountAggregateInputType>;
export const MCPAssistantServerCountAggregateInputObjectZodSchema = makeSchema();
