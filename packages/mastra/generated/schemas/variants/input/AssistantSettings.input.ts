import * as z from 'zod';
// prettier-ignore
export const AssistantSettingsInputSchema = z.object({
    id: z.string(),
    contextCount: z.number().int(),
    temperature: z.number(),
    topP: z.number(),
    maxTokens: z.number().int().optional().nullable(),
    enableMaxTokens: z.boolean(),
    streamOutput: z.boolean(),
    hideMessages: z.boolean(),
    customParameters: z.unknown().optional().nullable(),
    reasoning_effort: z.string().optional().nullable(),
    qwenThinkMode: z.boolean().optional().nullable(),
    toolUseMode: z.string().optional().nullable(),
    assistant: z.unknown().optional().nullable(),
    assistantId: z.string().optional().nullable(),
    agent: z.unknown().optional().nullable(),
    agentId: z.string().optional().nullable(),
    defaultModel: z.unknown().optional().nullable(),
    defaultModelId: z.string().optional().nullable()
}).strict();

export type AssistantSettingsInputType = z.infer<typeof AssistantSettingsInputSchema>;
