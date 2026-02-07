import * as z from 'zod';
// prettier-ignore
export const QuickPhraseInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    order: z.number().int().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type QuickPhraseInputType = z.infer<typeof QuickPhraseInputSchema>;
