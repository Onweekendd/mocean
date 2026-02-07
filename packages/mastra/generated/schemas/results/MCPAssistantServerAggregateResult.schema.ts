import * as z from 'zod';
export const MCPAssistantServerAggregateResultSchema = z.object({  _count: z.object({
    assistant: z.number(),
    assistantId: z.number(),
    mcpServer: z.number(),
    mcpServerId: z.number()
  }).optional(),
  _min: z.object({
    assistantId: z.string().nullable(),
    mcpServerId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    assistantId: z.string().nullable(),
    mcpServerId: z.string().nullable()
  }).nullable().optional()});