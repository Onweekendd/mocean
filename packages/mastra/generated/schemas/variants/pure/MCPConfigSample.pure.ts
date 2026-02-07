import * as z from 'zod';
// prettier-ignore
export const MCPConfigSampleModelSchema = z.object({
    id: z.string(),
    command: z.string(),
    argsJson: z.unknown().nullable(),
    env: z.unknown().nullable(),
    server: z.unknown(),
    serverId: z.string()
}).strict();

export type MCPConfigSamplePureType = z.infer<typeof MCPConfigSampleModelSchema>;
