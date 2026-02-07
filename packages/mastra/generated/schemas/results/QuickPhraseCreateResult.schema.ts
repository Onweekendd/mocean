import * as z from 'zod';
export const QuickPhraseCreateResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  order: z.number().int().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});