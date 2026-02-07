import * as z from 'zod';
// prettier-ignore
export const KnowledgeBaseInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    dimensions: z.number().int(),
    description: z.string().optional().nullable(),
    documentCount: z.number().int().optional().nullable(),
    chunkSize: z.number().int().optional().nullable(),
    chunkOverlap: z.number().int().optional().nullable(),
    threshold: z.number().optional().nullable(),
    version: z.number().int(),
    assistants: z.array(z.unknown()),
    agents: z.array(z.unknown()),
    model: z.unknown(),
    modelId: z.string(),
    rerankModel: z.unknown().optional().nullable(),
    rerankModelId: z.string().optional().nullable(),
    items: z.array(z.unknown()),
    topics: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type KnowledgeBaseInputType = z.infer<typeof KnowledgeBaseInputSchema>;
