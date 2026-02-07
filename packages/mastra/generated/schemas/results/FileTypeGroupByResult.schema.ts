import * as z from 'zod';
export const FileTypeGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  origin_name: z.string(),
  path: z.string(),
  size: z.number().int(),
  ext: z.string(),
  type: z.string(),
  count: z.number().int(),
  tokens: z.number().int(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    origin_name: z.number(),
    path: z.number(),
    size: z.number(),
    ext: z.number(),
    type: z.number(),
    count: z.number(),
    tokens: z.number(),
    created_at: z.number()
  }).optional(),
  _sum: z.object({
    size: z.number().nullable(),
    count: z.number().nullable(),
    tokens: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    size: z.number().nullable(),
    count: z.number().nullable(),
    tokens: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    origin_name: z.string().nullable(),
    path: z.string().nullable(),
    size: z.number().int().nullable(),
    ext: z.string().nullable(),
    type: z.string().nullable(),
    count: z.number().int().nullable(),
    tokens: z.number().int().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    origin_name: z.string().nullable(),
    path: z.string().nullable(),
    size: z.number().int().nullable(),
    ext: z.string().nullable(),
    type: z.string().nullable(),
    count: z.number().int().nullable(),
    tokens: z.number().int().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));