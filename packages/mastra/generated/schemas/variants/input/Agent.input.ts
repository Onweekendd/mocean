import * as z from 'zod';
import { KnowledgeRecognitionSchema } from '../../enums/KnowledgeRecognition.schema';
// prettier-ignore
export const AgentInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    prompt: z.string(),
    type: z.string(),
    emoji: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    groupJson: z.unknown().optional().nullable(),
    enableWebSearch: z.boolean(),
    webSearchProviderId: z.string().optional().nullable(),
    enableGenerateImage: z.boolean(),
    knowledgeRecognition: KnowledgeRecognitionSchema.optional().nullable(),
    settings: z.unknown().optional().nullable(),
    topics: z.array(z.unknown()),
    knowledgeBases: z.array(z.unknown()),
    mcpServers: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AgentInputType = z.infer<typeof AgentInputSchema>;
