import * as z from 'zod';
// prettier-ignore
export const MCPToolModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    inputSchema: z.unknown(),
    server: z.unknown(),
    serverId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MCPToolPureType = z.infer<typeof MCPToolModelSchema>;
