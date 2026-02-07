import * as z from 'zod';
export const FileTypeFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});