import * as z from 'zod';

export const FileTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  origin_name: z.string(),
  path: z.string(),
  size: z.number().int(),
  ext: z.string(),
  type: z.string(),
  count: z.number().int(),
  tokens: z.number().int().nullish(),
  created_at: z.date(),
});

export type FileTypeType = z.infer<typeof FileTypeSchema>;
