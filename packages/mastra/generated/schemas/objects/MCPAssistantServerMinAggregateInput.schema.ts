import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  assistantId: z.literal(true).optional(),
  mcpServerId: z.literal(true).optional()
}).strict();
export const MCPAssistantServerMinAggregateInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerMinAggregateInputType>;
export const MCPAssistantServerMinAggregateInputObjectZodSchema = makeSchema();
