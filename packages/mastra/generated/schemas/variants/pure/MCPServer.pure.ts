import * as z from 'zod';
// prettier-ignore
export const MCPServerModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    type: z.string().nullable(),
    description: z.string().nullable(),
    baseUrl: z.string().nullable(),
    command: z.string().nullable(),
    registryUrl: z.string().nullable(),
    argsJson: z.unknown().nullable(),
    env: z.unknown().nullable(),
    isActive: z.boolean(),
    disabledToolsJson: z.unknown().nullable(),
    configSample: z.unknown().nullable(),
    headers: z.unknown().nullable(),
    searchKey: z.string().nullable(),
    provider: z.string().nullable(),
    providerUrl: z.string().nullable(),
    logoUrl: z.string().nullable(),
    tagsJson: z.unknown().nullable(),
    timeout: z.number().int().nullable(),
    tools: z.array(z.unknown()),
    prompts: z.array(z.unknown()),
    assistants: z.array(z.unknown()),
    agents: z.array(z.unknown()),
    resources: z.array(z.unknown()),
    configSampleRelation: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type MCPServerPureType = z.infer<typeof MCPServerModelSchema>;
