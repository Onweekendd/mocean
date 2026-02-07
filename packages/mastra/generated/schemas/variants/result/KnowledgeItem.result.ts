import * as z from 'zod';
// prettier-ignore
export const KnowledgeItemResultSchema = z.object({
    id: z.string(),
    uniqueId: z.string().nullable(),
    uniqueIdsJson: z.unknown().nullable(),
    type: z.string(),
    content: z.unknown(),
    remark: z.string().nullable(),
    processingStatus: z.string().nullable(),
    processingProgress: z.number().nullable(),
    processingError: z.string().nullable(),
    retryCount: z.number().int().nullable(),
    knowledgeBase: z.unknown(),
    baseId: z.string(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type KnowledgeItemResultType = z.infer<typeof KnowledgeItemResultSchema>;
