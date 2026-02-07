import * as z from 'zod';
// prettier-ignore
export const TopicInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    prompt: z.string().optional().nullable(),
    pinned: z.boolean(),
    isNameManuallyEdited: z.boolean(),
    assistant: z.unknown().optional().nullable(),
    assistantId: z.string().optional().nullable(),
    agent: z.unknown().optional().nullable(),
    agentId: z.string().optional().nullable(),
    modelId: z.string().optional().nullable(),
    model: z.unknown().optional().nullable(),
    knowledgeBases: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TopicInputType = z.infer<typeof TopicInputSchema>;
