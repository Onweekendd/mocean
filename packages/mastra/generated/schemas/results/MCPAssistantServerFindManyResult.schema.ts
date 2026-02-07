import * as z from 'zod';
export const MCPAssistantServerFindManyResultSchema = z.object({
  data: z.array(z.object({
  assistant: z.unknown(),
  assistantId: z.string(),
  mcpServer: z.unknown(),
  mcpServerId: z.string()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});