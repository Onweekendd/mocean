import * as z from 'zod';
import { KnowledgeRecognitionSchema } from '../../enums/KnowledgeRecognition.schema';
// prettier-ignore
export const AssistantResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    prompt: z.string(),
    type: z.string(),
    emoji: z.string().nullable(),
    description: z.string().nullable(),
    enableWebSearch: z.boolean(),
    webSearchProviderId: z.string().nullable(),
    enableGenerateImage: z.boolean(),
    knowledgeRecognition: KnowledgeRecognitionSchema.nullable(),
    model: z.unknown().nullable(),
    modelId: z.string().nullable(),
    provider: z.unknown().nullable(),
    providerId: z.string().nullable(),
    defaultModel: z.unknown().nullable(),
    defaultModelId: z.string().nullable(),
    settings: z.unknown().nullable(),
    topics: z.array(z.unknown()),
    knowledgeBases: z.array(z.unknown()),
    mcpServers: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AssistantResultType = z.infer<typeof AssistantResultSchema>;
