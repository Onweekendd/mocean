import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  origin_name: z.boolean().optional(),
  path: z.boolean().optional(),
  size: z.boolean().optional(),
  ext: z.boolean().optional(),
  type: z.boolean().optional(),
  count: z.boolean().optional(),
  tokens: z.boolean().optional(),
  created_at: z.boolean().optional()
}).strict();
export const FileTypeSelectObjectSchema: z.ZodType<Prisma.FileTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.FileTypeSelect>;
export const FileTypeSelectObjectZodSchema = makeSchema();
