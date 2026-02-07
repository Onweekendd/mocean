import * as z from 'zod';
// prettier-ignore
export const ModelInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    owned_by: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    isSystem: z.boolean(),
    contextLength: z.number().int().optional().nullable(),
    supportsAttachments: z.boolean(),
    supportsTools: z.boolean(),
    supportsReasoning: z.boolean(),
    supportsImage: z.boolean(),
    supportsAudio: z.boolean(),
    supportsVideo: z.boolean(),
    supportsEmbedding: z.boolean(),
    inputPricePerMillion: z.number().optional().nullable(),
    outputPricePerMillion: z.number().optional().nullable(),
    modelGroups: z.array(z.unknown()),
    assistants: z.array(z.unknown()),
    defaultForAssistants: z.array(z.unknown()),
    knowledgeBases: z.array(z.unknown()),
    assistantSettings: z.array(z.unknown()),
    rerankFor: z.array(z.unknown()),
    Topic: z.array(z.unknown()),
    providers: z.array(z.unknown())
}).strict();

export type ModelInputType = z.infer<typeof ModelInputSchema>;
