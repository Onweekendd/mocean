import * as z from 'zod';

export const QuickPhraseSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  order: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type QuickPhraseType = z.infer<typeof QuickPhraseSchema>;
