import * as z from 'zod';
// prettier-ignore
export const MCPConfigSampleInputSchema = z.object({
    id: z.string(),
    command: z.string(),
    argsJson: z.unknown().optional().nullable(),
    env: z.unknown().optional().nullable(),
    server: z.unknown(),
    serverId: z.string()
}).strict();

export type MCPConfigSampleInputType = z.infer<typeof MCPConfigSampleInputSchema>;
