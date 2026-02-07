import * as z from 'zod';
// prettier-ignore
export const MCPPromptInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    arguments: z.unknown().optional().nullable(),
    server: z.unknown(),
    serverId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MCPPromptInputType = z.infer<typeof MCPPromptInputSchema>;
