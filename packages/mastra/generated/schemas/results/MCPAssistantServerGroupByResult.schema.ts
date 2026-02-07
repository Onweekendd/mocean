import * as z from 'zod';
export const MCPAssistantServerGroupByResultSchema = z.array(z.object({
  assistantId: z.string(),
  mcpServerId: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));