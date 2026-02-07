import * as z from 'zod';
// prettier-ignore
export const MCPServerInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    type: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    baseUrl: z.string().optional().nullable(),
    command: z.string().optional().nullable(),
    registryUrl: z.string().optional().nullable(),
    argsJson: z.unknown().optional().nullable(),
    env: z.unknown().optional().nullable(),
    isActive: z.boolean(),
    disabledToolsJson: z.unknown().optional().nullable(),
    configSample: z.unknown().optional().nullable(),
    headers: z.unknown().optional().nullable(),
    searchKey: z.string().optional().nullable(),
    provider: z.string().optional().nullable(),
    providerUrl: z.string().optional().nullable(),
    logoUrl: z.string().optional().nullable(),
    tagsJson: z.unknown().optional().nullable(),
    timeout: z.number().int().optional().nullable(),
    tools: z.array(z.unknown()),
    prompts: z.array(z.unknown()),
    assistants: z.array(z.unknown()),
    agents: z.array(z.unknown()),
    resources: z.array(z.unknown()),
    configSampleRelation: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MCPServerInputType = z.infer<typeof MCPServerInputSchema>;
