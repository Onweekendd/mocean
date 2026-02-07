import * as z from 'zod';
// prettier-ignore
export const MCPToolInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    inputSchema: z.unknown(),
    server: z.unknown(),
    serverId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MCPToolInputType = z.infer<typeof MCPToolInputSchema>;
