import * as z from 'zod';
// prettier-ignore
export const MCPPromptResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    arguments: z.unknown().nullable(),
    server: z.unknown(),
    serverId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MCPPromptResultType = z.infer<typeof MCPPromptResultSchema>;
