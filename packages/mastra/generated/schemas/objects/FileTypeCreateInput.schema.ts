import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  origin_name: z.string(),
  path: z.string(),
  size: z.number().int(),
  ext: z.string(),
  type: z.string(),
  count: z.number().int(),
  tokens: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const FileTypeCreateInputObjectSchema: z.ZodType<Prisma.FileTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FileTypeCreateInput>;
export const FileTypeCreateInputObjectZodSchema = makeSchema();
