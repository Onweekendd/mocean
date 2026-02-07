import * as z from 'zod';
export const FileTypeFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  origin_name: z.string(),
  path: z.string(),
  size: z.number().int(),
  ext: z.string(),
  type: z.string(),
  count: z.number().int(),
  tokens: z.number().int().optional(),
  created_at: z.date()
}));