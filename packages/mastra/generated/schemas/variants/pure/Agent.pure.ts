import * as z from 'zod';
import { KnowledgeRecognitionSchema } from '../../enums/KnowledgeRecognition.schema';
// prettier-ignore
export const AgentModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    prompt: z.string(),
    type: z.string(),
    emoji: z.string().nullable(),
    description: z.string().nullable(),
    groupJson: z.unknown().nullable(),
    enableWebSearch: z.boolean(),
    webSearchProviderId: z.string().nullable(),
    enableGenerateImage: z.boolean(),
    knowledgeRecognition: KnowledgeRecognitionSchema.nullable(),
    settings: z.unknown().nullable(),
    topics: z.array(z.unknown()),
    knowledgeBases: z.array(z.unknown()),
    mcpServers: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AgentPureType = z.infer<typeof AgentModelSchema>;
