import * as z from 'zod';
// prettier-ignore
export const KnowledgeItemInputSchema = z.object({
    id: z.string(),
    uniqueId: z.string().optional().nullable(),
    uniqueIdsJson: z.unknown().optional().nullable(),
    type: z.string(),
    content: z.unknown(),
    remark: z.string().optional().nullable(),
    processingStatus: z.string().optional().nullable(),
    processingProgress: z.number().optional().nullable(),
    processingError: z.string().optional().nullable(),
    retryCount: z.number().int().optional().nullable(),
    knowledgeBase: z.unknown(),
    baseId: z.string(),
    created_at: z.date(),
    updated_at: z.date()
}).strict();

export type KnowledgeItemInputType = z.infer<typeof KnowledgeItemInputSchema>;
