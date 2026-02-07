import * as z from 'zod';
// prettier-ignore
export const QuickPhraseModelSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    order: z.number().int().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type QuickPhrasePureType = z.infer<typeof QuickPhraseModelSchema>;
