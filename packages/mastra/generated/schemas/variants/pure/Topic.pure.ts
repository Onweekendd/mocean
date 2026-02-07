import * as z from 'zod';
// prettier-ignore
export const TopicModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    prompt: z.string().nullable(),
    pinned: z.boolean(),
    isNameManuallyEdited: z.boolean(),
    assistant: z.unknown().nullable(),
    assistantId: z.string().nullable(),
    agent: z.unknown().nullable(),
    agentId: z.string().nullable(),
    modelId: z.string().nullable(),
    model: z.unknown().nullable(),
    knowledgeBases: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TopicPureType = z.infer<typeof TopicModelSchema>;
