import * as z from 'zod';
// prettier-ignore
export const AssistantSettingsResultSchema = z.object({
    id: z.string(),
    contextCount: z.number().int(),
    temperature: z.number(),
    topP: z.number(),
    maxTokens: z.number().int().nullable(),
    enableMaxTokens: z.boolean(),
    streamOutput: z.boolean(),
    hideMessages: z.boolean(),
    customParameters: z.unknown().nullable(),
    reasoning_effort: z.string().nullable(),
    qwenThinkMode: z.boolean().nullable(),
    toolUseMode: z.string().nullable(),
    assistant: z.unknown().nullable(),
    assistantId: z.string().nullable(),
    agent: z.unknown().nullable(),
    agentId: z.string().nullable(),
    defaultModel: z.unknown().nullable(),
    defaultModelId: z.string().nullable()
}).strict();

export type AssistantSettingsResultType = z.infer<typeof AssistantSettingsResultSchema>;
