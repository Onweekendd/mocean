import * as z from 'zod';
// prettier-ignore
export const MCPResourceInputSchema = z.object({
    id: z.string(),
    uri: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    mimeType: z.string().optional().nullable(),
    size: z.number().int().optional().nullable(),
    text: z.string().optional().nullable(),
    blob: z.string().optional().nullable(),
    server: z.unknown(),
    serverId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MCPResourceInputType = z.infer<typeof MCPResourceInputSchema>;
