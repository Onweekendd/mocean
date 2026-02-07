import * as z from 'zod';
// prettier-ignore
export const MCPToolResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    inputSchema: z.unknown(),
    server: z.unknown(),
    serverId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MCPToolResultType = z.infer<typeof MCPToolResultSchema>;
