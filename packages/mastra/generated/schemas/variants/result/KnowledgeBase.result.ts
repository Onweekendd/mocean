import * as z from 'zod';
// prettier-ignore
export const KnowledgeBaseResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    dimensions: z.number().int(),
    description: z.string().nullable(),
    documentCount: z.number().int().nullable(),
    chunkSize: z.number().int().nullable(),
    chunkOverlap: z.number().int().nullable(),
    threshold: z.number().nullable(),
    version: z.number().int(),
    assistants: z.array(z.unknown()),
    agents: z.array(z.unknown()),
    model: z.unknown(),
    modelId: z.string(),
    rerankModel: z.unknown().nullable(),
    rerankModelId: z.string().nullable(),
    items: z.array(z.unknown()),
    topics: z.array(z.unknown()),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type KnowledgeBaseResultType = z.infer<typeof KnowledgeBaseResultSchema>;
