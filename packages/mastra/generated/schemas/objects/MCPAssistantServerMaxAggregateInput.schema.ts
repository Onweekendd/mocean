import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  assistantId: z.literal(true).optional(),
  mcpServerId: z.literal(true).optional()
}).strict();
export const MCPAssistantServerMaxAggregateInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerMaxAggregateInputType>;
export const MCPAssistantServerMaxAggregateInputObjectZodSchema = makeSchema();
