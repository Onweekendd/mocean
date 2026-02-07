import * as z from 'zod';
// prettier-ignore
export const MCPResourceModelSchema = z.object({
    id: z.string(),
    uri: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    mimeType: z.string().nullable(),
    size: z.number().int().nullable(),
    text: z.string().nullable(),
    blob: z.string().nullable(),
    server: z.unknown(),
    serverId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MCPResourcePureType = z.infer<typeof MCPResourceModelSchema>;
